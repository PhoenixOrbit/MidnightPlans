import Contact from '../components/Contact';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function ContactPage() {
  useDocumentMeta(
    'Contact Us',
    'Get in touch with Midnight Plans to book balloon decoration and event styling in Ottawa, Orléans, Kanata, or Central Gatineau. We usually respond within 24 hours.'
  );

  return <Contact />;
}
