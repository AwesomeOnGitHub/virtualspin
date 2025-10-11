import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';

interface ContactProps {
  showToast: (message: string, type: 'success' | 'error') => void;
}

const Contact: React.FC<ContactProps> = ({ showToast }) => {
  const { t } = useTranslations();
  const contactText = t('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === '',
      email: !validateEmail(formData.email),
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      showToast(contactText.formError, 'error');
      return;
    }

    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      showToast(contactText.formSuccess, 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
      showToast('An unexpected error occurred.', 'error');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{contactText.title}</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">{contactText.subtitle}</p>
        <div className="max-w-2xl mx-auto bg-[var(--card)] p-8 sm:p-12 rounded-2xl border border-gray-800/50">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={contactText.namePlaceholder}
                className={`w-full bg-transparent text-white p-2 border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-600'} focus:border-[var(--primary)] focus:outline-none transition-colors`}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contactText.emailPlaceholder}
                className={`w-full bg-transparent text-white p-2 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:border-[var(--primary)] focus:outline-none transition-colors`}
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={contactText.messagePlaceholder}
              rows={4}
              className={`w-full bg-transparent text-white p-2 border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:border-[var(--primary)] focus:outline-none transition-colors resize-none`}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[var(--primary)] hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              {contactText.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;