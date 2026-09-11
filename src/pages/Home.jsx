import Hero from '../components/Hero';
import BalloonsBanner from '../components/BalloonsBanner';
import ServicesTeaser from '../components/ServicesTeaser';
import ServingAreasTeaser from '../components/ServingAreasTeaser';
import Testimonials from '../components/Testimonials';
import CtaBand from '../components/CtaBand';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function Home() {
  useDocumentMeta(
    'Balloon & Event Decoration Ottawa',
    'Luxury balloon decorations and elegant event styling in Ottawa, Orléans, Kanata, and Gatineau. Baby showers, birthdays, gender reveals, Persian events, Haft Seen & more.'
  );

  return (
    <>
      <Hero />
      <BalloonsBanner />
      <ServingAreasTeaser />
      <ServicesTeaser />
      <Testimonials />
      <CtaBand />
    </>
  );
}
