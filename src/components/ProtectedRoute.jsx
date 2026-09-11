import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { isFirebaseConfigured } from '../firebase';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (!isFirebaseConfigured) {
    return <Navigate to="/admin" replace />;
  }
  if (loading) {
    return <div className="admin-loading">Loading…</div>;
  }
  if (!user) {
    return <Navigate to="/admin" replace />;
  }
  return children;
}
