"use client";

import React, { useState } from 'react';

interface QuoteFormProps {
  source: string;
  /** Interest options; culinary argan oil is only offered once it is confirmed. */
  interests: string[];
  /** "short": Name, Email, Country, Product, Quantity. "full": adds Company, WhatsApp and Message. */
  variant?: 'full' | 'short';
}

const emptyForm = {
  contactName: '',
  contactCompany: '',
  contactEmail: '',
  contactCountry: '',
  contactWhatsapp: '',
  contactInterest: '',
  contactQuantity: '',
  contactMessage: '',
  spamCheck: '',
};

export default function QuoteForm({ source, interests, variant = 'full' }: QuoteFormProps) {
  const isShort = variant === 'short';
  const idPrefix = isShort ? 'quick-' : '';
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: bots fill the hidden field; pretend it worked.
    if (formData.spamCheck !== '') {
      setStatus({ type: 'success', message: 'Thank you.' });
      return;
    }

    setStatus({ type: 'sending', message: 'Sending...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, contactSource: source }),
      });
      const result = await response.json();

      if (response.ok && result.type === 'message') {
        setStatus({ type: 'success', message: result.text || 'Thank you. We will get back to you.' });
        setFormData(emptyForm);
      } else {
        setStatus({ type: 'error', message: result.text || 'An error occurred. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Sorry, no connection at the moment. Please try again.' });
    }
  };

  const field = (
    name: keyof typeof emptyForm,
    label: string,
    options: { type?: string; required?: boolean; autoComplete?: string } = {},
  ) => (
    <div>
      <label htmlFor={`${idPrefix}${name}`}>{label}</label>
      <input
        id={`${idPrefix}${name}`}
        name={name}
        type={options.type ?? 'text'}
        required={options.required}
        autoComplete={options.autoComplete}
        value={formData[name]}
        onChange={handleChange}
      />
    </div>
  );

  const productSelect = (
    <div>
      <label htmlFor={`${idPrefix}contactInterest`}>{isShort ? 'Product' : 'I am interested in'}</label>
      <select
        id={`${idPrefix}contactInterest`}
        name="contactInterest"
        required
        value={formData.contactInterest}
        onChange={handleChange}
      >
        <option value="" disabled>
          Choose one
        </option>
        {interests.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <form className="mop-form" onSubmit={handleSubmit} aria-label={isShort ? 'Quick quote request' : 'Quote request'}>
      {isShort ? (
        <>
          <div className="mop-form__row">
            {field('contactName', 'Name', { required: true, autoComplete: 'name' })}
            {field('contactEmail', 'Email', { type: 'email', required: true, autoComplete: 'email' })}
          </div>
          <div className="mop-form__row">
            {field('contactCountry', 'Country', { required: true, autoComplete: 'country-name' })}
            {productSelect}
          </div>
          {field('contactQuantity', 'Quantity')}
        </>
      ) : (
        <>
          <div className="mop-form__row">
            {field('contactName', 'Name', { required: true, autoComplete: 'name' })}
            {field('contactCompany', 'Company', { autoComplete: 'organization' })}
          </div>
          <div className="mop-form__row">
            {field('contactEmail', 'Email', { type: 'email', required: true, autoComplete: 'email' })}
            {field('contactCountry', 'Country', { required: true, autoComplete: 'country-name' })}
          </div>
          <div className="mop-form__row">
            {field('contactWhatsapp', 'WhatsApp (optional)', { type: 'tel', autoComplete: 'tel' })}
            {productSelect}
          </div>
          {field('contactQuantity', 'Quantity')}
          <div>
            <label htmlFor="contactMessage">Message</label>
            <textarea
              id="contactMessage"
              name="contactMessage"
              required
              value={formData.contactMessage}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* Honeypot spam check */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <input type="text" name="spamCheck" tabIndex={-1} autoComplete="off" value={formData.spamCheck} onChange={handleChange} />
      </div>

      <button type="submit" disabled={status.type === 'sending'}>
        {status.type === 'sending' ? 'Sending...' : isShort ? 'Get my quote' : 'Send My Request'}
      </button>

      {status.message && status.type !== 'sending' && (
        <p
          className={`mop-form__status mop-form__status--${status.type === 'success' ? 'success' : 'error'}`}
          role={status.type === 'error' ? 'alert' : 'status'}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
