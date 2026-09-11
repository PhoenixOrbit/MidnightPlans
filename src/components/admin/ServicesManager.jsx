import { useState } from 'react';
import useServices from '../../hooks/useServices';
import { addItem, updateItem, deleteItem, uploadImage, deleteImageByUrl } from '../../data/adminApi';

const EMPTY_FORM = {
  title: '',
  shortDescription: '',
  longDescription: '',
  whatsIncluded: '',
  order: '',
};

export default function ServicesManager() {
  const { services, loading, usingFallback } = useServices();
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

  const handleEdit = (service) => {
    setEditingId(service.id);
    setForm({
      title: service.title || '',
      shortDescription: service.shortDescription || '',
      longDescription: service.longDescription || '',
      whatsIncluded: Array.isArray(service.whatsIncluded) ? service.whatsIncluded.join('\n') : '',
      order: service.order ?? '',
    });
    setExistingImageUrl(service.imageUrl || '');
    setImageFile(null);
    setError('');
  };

  const handleDelete = async (service) => {
    if (!window.confirm(`Delete "${service.title}"? This can't be undone.`)) return;
    try {
      await deleteItem('services', service.id);
      if (service.imageUrl) await deleteImageByUrl(service.imageUrl);
      if (editingId === service.id) resetForm();
    } catch (err) {
      setError('Could not delete this service. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      let imageUrl = existingImageUrl;
      if (imageFile) {
        imageUrl = await uploadImage('services', imageFile);
      }

      const data = {
        title: form.title.trim(),
        shortDescription: form.shortDescription.trim(),
        longDescription: form.longDescription.trim(),
        whatsIncluded: form.whatsIncluded
          .split('\n')
          .map((s) => s.trim())
          .filter(Boolean),
        order: form.order === '' ? 0 : Number(form.order),
        imageUrl,
      };

      if (editingId) {
        await updateItem('services', editingId, data);
      } else {
        await addItem('services', data);
      }
      resetForm();
    } catch (err) {
      setError('Could not save this service. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-manager">
      <div className="admin-manager-list">
        <h2 className="admin-section-title">Services ({loading ? '…' : services.length})</h2>

        {usingFallback && (
          <p className="admin-fallback-note">
            These are example defaults. Add your first service below to replace them.
          </p>
        )}

        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul className="admin-item-list">
            {services.map((service) => (
              <li key={service.id} className="admin-item-row">
                {(service.imageUrl || service.imageName) && (
                  <img
                    src={service.imageUrl || `/images/${service.imageName}`}
                    alt=""
                    className="admin-item-thumb"
                  />
                )}
                <div className="admin-item-info">
                  <strong>{service.title}</strong>
                  <span>{service.shortDescription}</span>
                </div>
                <div className="admin-item-actions">
                  <button
                    type="button"
                    className="admin-btn-edit"
                    onClick={() => handleEdit(service)}
                    disabled={usingFallback}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="admin-btn-delete"
                    onClick={() => handleDelete(service)}
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
        <h2 className="admin-section-title">{editingId ? 'Edit Service' : 'Add New Service'}</h2>
        {error && <p className="admin-auth-error" role="alert">{error}</p>}

        <div className="form-group">
          <label className="form-label" htmlFor="svc-title">Title *</label>
          <input
            id="svc-title"
            className="form-input"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="svc-short">Short Description</label>
          <input
            id="svc-short"
            className="form-input"
            value={form.shortDescription}
            onChange={(e) => setForm((f) => ({ ...f, shortDescription: e.target.value }))}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="svc-long">Full Description</label>
          <textarea
            id="svc-long"
            className="form-textarea"
            rows={3}
            value={form.longDescription}
            onChange={(e) => setForm((f) => ({ ...f, longDescription: e.target.value }))}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="svc-included">What's Included (one per line)</label>
          <textarea
            id="svc-included"
            className="form-textarea"
            rows={4}
            value={form.whatsIncluded}
            onChange={(e) => setForm((f) => ({ ...f, whatsIncluded: e.target.value }))}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="svc-order">Display Order</label>
            <input
              id="svc-order"
              type="number"
              className="form-input"
              value={form.order}
              onChange={(e) => setForm((f) => ({ ...f, order: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="svc-image">Image</label>
            <input
              id="svc-image"
              type="file"
              accept="image/*"
              className="form-input"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
          </div>
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="form-submit" disabled={saving}>
            <span>{saving ? 'Saving…' : editingId ? 'Save Changes' : 'Add Service'}</span>
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
