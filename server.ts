import express from "express";
import type { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ALERT_API_TOKEN = process.env.ALERT_API_TOKEN || crypto.randomBytes(32).toString("hex");

function requireAlertToken(req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ") || header.slice(7) !== ALERT_API_TOKEN) {
    res.status(401).json({ error: "Unauthorized — valid Bearer token required" });
    return;
  }
  next();
}

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "").split(",").map(o => o.trim()).filter(Boolean);

function isOriginAllowed(origin: string | undefined): boolean {
  if (ALLOWED_ORIGINS.length === 0) return true;
  return origin !== undefined && ALLOWED_ORIGINS.includes(origin);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  const wss = new WebSocketServer({ server });
  const PORT = 3000;

  if (!process.env.ALERT_API_TOKEN) {
    console.warn(`[security] ALERT_API_TOKEN not set — generated ephemeral token: ${ALERT_API_TOKEN}`);
  }

  app.use(express.json());

  const clients = new Set<WebSocket>();

  wss.on("connection", (ws, req) => {
    const origin = req.headers.origin;
    if (!isOriginAllowed(origin)) {
      ws.close(4003, "Origin not allowed");
      return;
    }

    clients.add(ws);
    console.log("Client connected to WebSocket");

    ws.on("close", () => {
      clients.delete(ws);
      console.log("Client disconnected");
    });
  });

  const broadcast = (data: unknown) => {
    const message = JSON.stringify(data);
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };

  const VALID_ALERT_TYPES = new Set([
    "theft", "break-in", "sublease_violation", "general_activity", "weirdness_alert",
  ]);
  const VALID_SEVERITIES = new Set(["low", "medium", "high", "critical"]);

  app.post("/api/trigger-alert", requireAlertToken, (req, res) => {
    const { type, description, severity, location } = req.body;

    if (typeof severity !== "string" || !VALID_SEVERITIES.has(severity)) {
      res.status(400).json({ error: "Invalid severity value" });
      return;
    }
    if (type !== undefined && (typeof type !== "string" || !VALID_ALERT_TYPES.has(type))) {
      res.status(400).json({ error: "Invalid alert type" });
      return;
    }
    if (description !== undefined && (typeof description !== "string" || description.length > 1000)) {
      res.status(400).json({ error: "Description must be a string under 1000 chars" });
      return;
    }
    if (location !== undefined && (typeof location !== "string" || location.length > 200)) {
      res.status(400).json({ error: "Location must be a string under 200 chars" });
      return;
    }

    if (severity === "high" || severity === "critical") {
      const alert = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        type: type || "weirdness_alert",
        description: description || "High-severity event detected!",
        severity,
        location: location || "Main Entrance",
      };

      broadcast({ type: "ALERT", payload: alert });
      res.json({ status: "Alert broadcasted", alert });
      return;
    }

    res.status(400).json({ error: "Only high or critical severity alerts are broadcasted via WebSocket" });
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", clients: clients.size });
  });

  app.post("/api/ai/analyze-event", async (req, res) => {
    const geminiKey = process.env.GEMINI_API_KEY;
    if (!geminiKey || geminiKey === "__SERVER_SIDE_ONLY__") {
      res.status(503).json({ error: "Gemini API key not configured on server" });
      return;
    }

    const { eventType, description, severity } = req.body;
    if (!eventType || !description || !severity) {
      res.status(400).json({ error: "Missing required fields: eventType, description, severity" });
      return;
    }

    try {
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey: geminiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this security event clip description and provide a more detailed, professional security assessment. 
        Event Type: ${String(eventType).slice(0, 100)}
        Initial Description: ${String(description).slice(0, 1000)}
        Severity: ${String(severity).slice(0, 20)}
        
        Provide a detailed breakdown of what might be happening, potential risks, and recommended actions. Keep it concise but professional.`,
      });

      res.json({ analysis: response.text || "No analysis available." });
    } catch (error) {
      console.error("Gemini analysis failed:", error);
      res.status(500).json({ error: "AI analysis failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
