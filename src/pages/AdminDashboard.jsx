import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ServicesManager from '../components/admin/ServicesManager';
import PortfolioManager from '../components/admin/PortfolioManager';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function AdminDashboard() {
  useDocumentMeta('Admin Dashboard', 'Midnight Plans admin dashboard.');

  const { logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('services');

  const handleLogout = async () => {
    await logout();
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-topbar">
        <span className="admin-topbar-title">Midnight Plans Admin</span>
        <div className="admin-topbar-actions">
          <Link to="/" className="admin-topbar-link">View Site</Link>
          <button type="button" className="admin-topbar-logout" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>

      <div className="admin-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'services'}
          className={`admin-tab${tab === 'services' ? ' active' : ''}`}
          onClick={() => setTab('services')}
        >
          Services
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'portfolio'}
          className={`admin-tab${tab === 'portfolio' ? ' active' : ''}`}
          onClick={() => setTab('portfolio')}
        >
          Portfolio
        </button>
      </div>

      <div className="admin-tab-panel">
        {tab === 'services' ? <ServicesManager /> : <PortfolioManager />}
      </div>
    </div>
  );
}
