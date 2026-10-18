# Silverback Security

AI-assisted video monitoring for a small apartment building. This is the Google AI Studio applet.

View it in AI Studio: https://ai.studio/apps/d3deeaf9-500c-40a5-a8f4-39a756d120af

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key. See `.env.example`.
3. Run the app:
   `npm run dev`

Firestore rules for this applet are `firestore.rules`. The data model is `firebase-blueprint.json`. Camera-side Python packages are listed in `requirements.txt`.
