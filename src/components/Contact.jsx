import { useState } from 'react';

// ── Edit contact details here ──────────────────────────────────
const CONTACT_DETAILS = [
  {
    id:      'phone',
    icon:    '📞',
    label:   'Phone',
    display: '(438) 778 1250',
    href:    'tel:+14387781250',
    external: false,
  },
  {
    id:      'email',
    icon:    '✉️',
    label:   'Email',
    display: 'info@midnightplans.ca',
    href:    'mailto:info@midnightplans.ca',
    external: false,
  },
  {
    id:      'instagram',
    icon:    '📸',
    label:   'Instagram',
    display: '@midnight.plans',
    href:    'https://instagram.com/midnight.plans',
    external: true,
  },
];

// ── Edit event type options here ───────────────────────────────
const EVENT_TYPES = [
  'Baby Shower',
  'Birthday Party',
  'Gender Reveal',
  'Grand Opening',
  "Valentine's Day",
  'Haft Seen / Persian Event',
  'Soft Play Area',
  'General Party',
  'Other',
];

const INITIAL_FORM = {
  name:      '',
  email:     '',
  phone:     '',
  eventType: '',
  message:   '',
};

export default function Contact() {
  const [form,      setForm]      = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Event Request: ${form.eventType || 'General'} – ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent Type: ${form.eventType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@midnightplans.ca?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-inner">

        {/* ── Info column ───────────────────────────────────── */}
        <div className="contact-info">
          <span className="section-label">Get In Touch</span>

          <h2 id="contact-heading">Let's Plan Your Event</h2>

          <p className="contact-info-subtitle">
            Ready to create something magical? Reach out and let's discuss your
            vision. We proudly serve Ottawa, Orléans, Kanata, and Central Gatineau.
          </p>

          {/* Contact details */}
          <address className="contact-items">
            {CONTACT_DETAILS.map((item) => (
              <div key={item.id} className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">{item.label}</span>
                  <span className="contact-item-value">
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      aria-label={`${item.label}: ${item.display}`}
                    >
                      {item.display}
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </address>
        </div>

        {/* ── Form column ───────────────────────────────────── */}
        <div
          className="contact-form-wrap"
          role="region"
          aria-label="Event booking form"
        >
          {submitted ? (
            /* Success state */
            <div className="form-success" role="alert" aria-live="polite">
              <span className="form-success-icon" aria-hidden="true">🎈</span>
              <p className="form-success-title">Request Sent!</p>
              <p className="form-success-text">
                Thank you — we'll be in touch soon to start planning your
                perfect event.
              </p>
            </div>
          ) : (
            <>
              <h3 className="contact-form-title">Send a Request</h3>

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Event decoration request form"
              >
                {/* Name + Phone row */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="(613) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                {/* Event type */}
                <div className="form-group">
                  <label className="form-label" htmlFor="eventType">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    className="form-select"
                    value={form.eventType}
                    onChange={handleChange}
                    aria-label="Select your event type"
                  >
                    <option value="">Select event type…</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message / Event Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your event — date, location, color theme, number of guests…"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  aria-label="Submit event decoration request"
                >
                  <span>Send Request</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
