import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'; // Import Trans for complex translations

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = t('contactForm.nameRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contactForm.emailInvalid');
    }
    if (!formData.message.trim()) newErrors.message = t('contactForm.messageRequired');
    if (formData.message.trim().length < 10) newErrors.message = t('contactForm.messageMinLength');
    if (!formData.consent) newErrors.consent = t('contactForm.consentRequired');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data submitted:', formData); // Keep for debugging, replace with actual submission logic
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '', consent: false });
      setErrors({});
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-blue-50 border-l-4 border-primary text-primary p-6 rounded-md shadow-md" role="alert">
        <h3 className="text-xl font-semibold mb-2">{t('contactForm.successTitle')}</h3>
        <p>{t('contactForm.successMessage')}</p>
        <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
            {t('contactForm.sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="contact-form" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-darktext mb-1">{t('contactForm.nameLabel')} <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors bg-white text-gray-900 placeholder-gray-500`}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className="text-red-600 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-darktext mb-1">{t('contactForm.emailLabel')} <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors bg-white text-gray-900 placeholder-gray-500`}
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className="text-red-600 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-darktext mb-1">{t('contactForm.phoneLabel')}</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors bg-white text-gray-900 placeholder-gray-500"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-darktext mb-1">{t('contactForm.serviceLabel')}</label>
        <select
          name="service"
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white transition-colors"
        >
          <option value="">{t('contactForm.serviceOptionDefault')}</option>
          <option value="ksiegowosc">{t('contactForm.serviceOptionAccounting')}</option>
          <option value="kadry_i_place">{t('contactForm.serviceOptionHR')}</option>
          <option value="zakladanie_dzialalnosci">{t('contactForm.serviceOptionSetup')}</option>
          <option value="obsluga_cudzoziemcow">{t('contactForm.serviceOptionForeigners')}</option>
          <option value="inne">{t('contactForm.serviceOptionOther')}</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-darktext mb-1">{t('contactForm.messageLabel')} <span className="text-red-500">*</span></label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors bg-white text-gray-900 placeholder-gray-500`}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        ></textarea>
        {errors.message && <p id="message-error" className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>
      <div className="flex items-start">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          className={`h-4 w-4 bg-white text-primary border-gray-300 rounded mt-0.5 ${errors.consent ? 'ring-2 ring-red-500' : ''}`}
          required
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className="font-medium text-darktext">
            {t('contactForm.consentLabel')} <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-500 text-xs">
             <Trans i18nKey="contactForm.consentDetails">
                Administratorem danych jest Legal In. Dane będą przetwarzane w celu odpowiedzi na zapytanie. <Link to="/polityka-prywatnosci" className="underline hover:text-primary">Dowiedz się więcej</Link>.
             </Trans>
          </p>
          {errors.consent && <p id="consent-error" className="text-red-600 text-xs mt-1">{errors.consent}</p>}
        </div>
      </div>
      <div>
        <button
          type="submit"
          id="contact-form-submit-button"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          {t('contactForm.submitButton')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;