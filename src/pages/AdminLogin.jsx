import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { isFirebaseConfigured } from '../firebase';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function AdminLogin() {
  useDocumentMeta('Admin Login', 'Midnight Plans admin login.');

  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (user) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-card">
        <Link to="/" className="admin-auth-back">← Back to site</Link>
        <h1 className="admin-auth-title">Admin Login</h1>

        {!isFirebaseConfigured ? (
          <div className="admin-auth-unconfigured">
            <p>
              The admin dashboard isn't set up yet — it needs a Firebase project
              connected before anyone can log in.
            </p>
            <p>
              Follow <code>SETUP_ADMIN.md</code> in the project root to create a
              Firebase project, enable email/password sign-in, and add your
              credentials to a <code>.env</code> file.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="admin-auth-form" noValidate>
            {error && (
              <p className="admin-auth-error" role="alert">{error}</p>
            )}
            <div className="form-group">
              <label className="form-label" htmlFor="admin-email">Email</label>
              <input
                id="admin-email"
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit" className="form-submit" disabled={submitting}>
              <span>{submitting ? 'Signing in…' : 'Sign In'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
