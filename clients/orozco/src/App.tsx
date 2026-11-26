import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { TrustBar } from './sections/TrustBar';
import { Story } from './sections/Story';
import { Process } from './sections/Process';
import { ServiceArea } from './sections/ServiceArea';
import { Hours } from './sections/Hours';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Nav } from './sections/Nav';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Story />
      <ServiceArea />
      <Hours />
      <Contact />
      <Footer />
    </div>
  );
}
