import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function NotFound() {
  useDocumentMeta('Page Not Found', 'The page you\'re looking for doesn\'t exist.');

  return (
    <section className="not-found" aria-labelledby="not-found-heading">
      <div className="not-found-inner">
        <span className="not-found-emoji" aria-hidden="true">🎈</span>
        <h1 id="not-found-heading">Page Not Found</h1>
        <p>The page you're looking for has floated away.</p>
        <Link to="/" className="btn-pill">Back To Home</Link>
      </div>
    </section>
  );
}
