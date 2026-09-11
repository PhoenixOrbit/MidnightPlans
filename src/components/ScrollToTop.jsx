import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jumps to the top of the page on every route change — without this,
// React Router keeps whatever scroll position the previous page was at.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
