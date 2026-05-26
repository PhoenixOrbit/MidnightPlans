import Hero from './components/Hero';
import Navigation from './components/Navigation';
import BalloonsBanner from './components/BalloonsBanner';
import ServingAreas from './components/ServingAreas';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';

export default function App() {
  return (
    <main id="main-content">
      <Hero />
      <Navigation />
      <BalloonsBanner />
      <ServingAreas />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
