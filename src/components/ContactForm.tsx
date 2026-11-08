"use client";

import React, { useState } from 'react';
import type { Locale } from '@/i18n';
import { getContactDictionary } from '@/i18n/contact';
import { CheckCircle2, AlertCircle } from '@/components/Icons';

interface ContactFormProps {
  source?: string;
  defaultSubject?: string;
  locale?: Locale;
}

export default function ContactForm({
  source = 'Contact Page',
  defaultSubject = '',
  locale = 'en',
}: ContactFormProps) {
  const dict = getContactDictionary(locale).formCard;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    subject: defaultSubject,
    message: '',
    spamCheck: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'sending' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.spamCheck !== '') {
      setStatus({
        type: 'success',
        message: dict.successMessage,
      });
      return;
    }

    setStatus({ type: 'sending', message: dict.sendingBtn });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactName: formData.fullName,
          contactPhone: formData.phone,
          contactEmail: formData.email,
          contactCompany: formData.company,
          contactSubject: formData.subject,
          contactInterest: formData.subject,
          contactMessage: formData.message,
          contactSource: source,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.type === 'message' || result.type === 'success')) {
        setStatus({
          type: 'success',
          message: dict.successMessage,
        });
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          spamCheck: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: result.text || dict.errorMessage,
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: dict.networkErrorMessage,
      });
    }
  };

  return (
    <form className="mop-contact-form" onSubmit={handleSubmit} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Row 1: Full Name & Phone */}
      <div className="mop-contact-form__row mop-contact-form__row--2col">
        <div className="mop-contact-field">
          <label htmlFor="contact-fullName">
            {dict.fullNameLabel} <span style={{ color: 'var(--mop-gold)' }}>*</span>
          </label>
          <input
            id="contact-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder={dict.fullNamePlaceholder}
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="mop-contact-field">
          <label htmlFor="contact-phone">{dict.phoneLabel}</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={dict.phonePlaceholder}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Row 2: Email */}
      <div className="mop-contact-field">
        <label htmlFor="contact-email">
          {dict.emailLabel} <span style={{ color: 'var(--mop-gold)' }}>*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={dict.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Row 3: Company */}
      <div className="mop-contact-field">
        <label htmlFor="contact-company">{dict.companyLabel}</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={dict.companyPlaceholder}
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      {/* Row 4: Subject */}
      <div className="mop-contact-field">
        <label htmlFor="contact-subject">{dict.subjectLabel}</label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="">{dict.subjectDefaultOption}</option>
          {dict.subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Row 5: Message */}
      <div className="mop-contact-field">
        <label htmlFor="contact-message">
          {dict.messageLabel} <span style={{ color: 'var(--mop-gold)' }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder={dict.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* Honeypot field */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <input
          type="text"
          name="spamCheck"
          tabIndex={-1}
          autoComplete="off"
          value={formData.spamCheck}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="mop-contact-submit-btn"
          disabled={status.type === 'sending'}
        >
          {status.type === 'sending' ? dict.sendingBtn : dict.submitBtn}
        </button>
        <p className="mop-contact-form__hint">{dict.hint}</p>
      </div>

      {/* Status Notifications */}
      {status.message && (
        <div
          role={status.type === 'error' ? 'alert' : 'status'}
          style={{
            padding: '14px 18px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            fontSize: '0.92rem',
            lineHeight: 1.5,
            border: `1px solid ${
              status.type === 'success' ? '#2f4a3a' : status.type === 'error' ? '#b3261e' : '#cfc4b4'
            }`,
            background:
              status.type === 'success' ? '#edf4ef' : status.type === 'error' ? '#fdf2f2' : '#f9f9f9',
            color:
              status.type === 'success' ? '#1c3426' : status.type === 'error' ? '#7a1912' : '#2b2420',
          }}
        >
          {status.type === 'success' && (
            <CheckCircle2 size={20} style={{ color: '#2f4a3a', flexShrink: 0, marginTop: '2px' }} />
          )}
          {status.type === 'error' && (
            <AlertCircle size={20} style={{ color: '#b3261e', flexShrink: 0, marginTop: '2px' }} />
          )}
          <span>{status.message}</span>
        </div>
      )}
    </form>
  );
}
