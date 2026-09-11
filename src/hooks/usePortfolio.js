import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase';
import { PORTFOLIO_SEED } from '../data/portfolioSeed';

// Same pattern as useServices — live Firestore "portfolio" collection,
// falling back to seed sample work when not configured / empty.
export default function usePortfolio() {
  const [portfolio, setPortfolio] = useState(isFirebaseConfigured ? [] : PORTFOLIO_SEED);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [usingFallback, setUsingFallback] = useState(!isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) return;

    const q = query(collection(db, 'portfolio'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          setPortfolio(PORTFOLIO_SEED);
          setUsingFallback(true);
        } else {
          setPortfolio(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
          setUsingFallback(false);
        }
        setLoading(false);
      },
      () => {
        setPortfolio(PORTFOLIO_SEED);
        setUsingFallback(true);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  return { portfolio, loading, usingFallback };
}
