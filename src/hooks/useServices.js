import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase';
import { SERVICES_SEED } from '../data/servicesSeed';

// Subscribes to the "services" Firestore collection (live updates), and
// falls back to the bundled seed data when Firebase isn't configured yet
// or the collection is still empty — keeps the site useful before the
// admin has added anything.
export default function useServices() {
  const [services, setServices] = useState(isFirebaseConfigured ? [] : SERVICES_SEED);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [usingFallback, setUsingFallback] = useState(!isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) return;

    const q = query(collection(db, 'services'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          setServices(SERVICES_SEED);
          setUsingFallback(true);
        } else {
          setServices(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
          setUsingFallback(false);
        }
        setLoading(false);
      },
      () => {
        setServices(SERVICES_SEED);
        setUsingFallback(true);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  return { services, loading, usingFallback };
}
