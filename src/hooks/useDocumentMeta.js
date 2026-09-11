import { useEffect } from 'react';

const SITE_NAME = 'Midnight Plans';

function setMetaTag(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Sets document.title + meta description per page. No react-helmet
// dependency needed for a handful of static pages.
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    if (description) setMetaTag('description', description);
  }, [title, description]);
}
