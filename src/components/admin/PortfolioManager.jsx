import { useState } from 'react';
import usePortfolio from '../../hooks/usePortfolio';
import { addItem, updateItem, deleteItem, uploadImage, deleteImageByUrl } from '../../data/adminApi';

const EMPTY_FORM = {
  title: '',
  description: '',
  eventType: '',
  order: '',
  featured: false,
};

export default function PortfolioManager() {
  const { portfolio, loading, usingFallback } = usePortfolio();
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const resetForm = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setImageFile(null);
    setExistingImageUrl('');
    setError('');
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      title: item.title || '',
      description: item.description || '',
      eventType: item.eventType || '',
      order: item.order ?? '',
      featured: Boolean(item.featured),
    });
    setExistingImageUrl(item.imageUrl || '');
    setImageFile(null);
    setError('');
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete "${item.title}"? This can't be undone.`)) return;
    try {
      await deleteItem('portfolio', item.id);
      if (item.imageUrl) await deleteImageByUrl(item.imageUrl);
      if (editingId === item.id) resetForm();
    } catch (err) {
      setError('Could not delete this piece. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      let imageUrl = existingImageUrl;
      if (imageFile) {
        imageUrl = await uploadImage('portfolio', imageFile);
      }

      if (!imageUrl) {
        setError('Please add an image for this portfolio piece.');
        setSaving(false);
        return;
      }

      const data = {
        title: form.title.trim(),
        description: form.description.trim(),
        eventType: form.eventType.trim(),
        order: form.order === '' ? 0 : Number(form.order),
        featured: form.featured,
        imageUrl,
      };

      if (editingId) {
        await updateItem('portfolio', editingId, data);
      } else {
        await addItem('portfolio', data);
      }
      resetForm();
    } catch (err) {
      setError('Could not save this piece. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-manager">
      <div className="admin-manager-list">
        <h2 className="admin-section-title">Portfolio ({loading ? '…' : portfolio.length})</h2>

        {usingFallback && (
          <p className="admin-fallback-note">
            These are example defaults. Add your first portfolio piece below to replace them.
          </p>
        )}

        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul className="admin-item-list">
            {portfolio.map((item) => (
              <li key={item.id} className="admin-item-row">
                {(item.imageUrl || item.imageName) && (
                  <img
                    src={item.imageUrl || `/images/${item.imageName}`}
                    alt=""
                    className="admin-item-thumb"
                  />
                )}
                <div className="admin-item-info">
                  <strong>{item.title}</strong>
                  <span>{item.eventType}{item.featured ? ' · Featured' : ''}</span>
                </div>
                <div className="admin-item-actions">
                  <button
                    type="button"
                    className="admin-btn-edit"
                    onClick={() => handleEdit(item)}
                    disabled={usingFallback}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="admin-btn-delete"
                    onClick={() => handleDelete(item)}
                    disabled={usingFallback}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h2 className="admin-section-title">{editingId ? 'Edit Portfolio Piece' : 'Add New Portfolio Piece'}</h2>
        {error && <p className="admin-auth-error" role="alert">{error}</p>}

        <div className="form-group">
          <label className="form-label" htmlFor="pf-title">Title *</label>
          <input
            id="pf-title"
            className="form-input"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="pf-desc">Description</label>
          <textarea
            id="pf-desc"
            className="form-textarea"
            rows={3}
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="pf-type">Event Type</label>
            <input
              id="pf-type"
              className="form-input"
              placeholder="e.g. Baby Shower"
              value={form.eventType}
              onChange={(e) => setForm((f) => ({ ...f, eventType: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="pf-order">Display Order</label>
            <input
              id="pf-order"
              type="number"
              className="form-input"
              value={form.order}
              onChange={(e) => setForm((f) => ({ ...f, order: e.target.value }))}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="pf-image">Image {editingId ? '' : '*'}</label>
          <input
            id="pf-image"
            type="file"
            accept="image/*"
            className="form-input"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>

        <label className="admin-checkbox-label">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
          />
          Featured piece
        </label>

        <div className="admin-form-actions">
          <button type="submit" className="form-submit" disabled={saving}>
            <span>{saving ? 'Saving…' : editingId ? 'Save Changes' : 'Add Piece'}</span>
          </button>
          {editingId && (
            <button type="button" className="admin-btn-cancel" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
