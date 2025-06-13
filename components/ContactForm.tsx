import React, { useState, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);

  const validate = (): boolean => {
    const form = formRef.current;
    if (!form) return false;
  
    const formData = {
      name: (form.elements.namedItem('from_name') as HTMLInputElement)?.value.trim(),
      email: (form.elements.namedItem('reply_to') as HTMLInputElement)?.value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim(),
      consent,
    };
  
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
  
    if (!formData.name) newErrors.name = t('contactForm.nameRequired');
    if (!formData.email) {
      newErrors.email = t('contactForm.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contactForm.emailInvalid');
    }
    if (!formData.message) {
      newErrors.message = t('contactForm.messageRequired');
    } else if (formData.message.length < 10) {
      newErrors.message = t('contactForm.messageMinLength');
    }
    if (!formData.consent) {
      newErrors.consent = t('contactForm.consentRequired');
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    if (!validate()) return;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setIsSubmitted(true);
        formRef.current?.reset();
        setConsent(false);
        setErrors({});
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Wystąpił problem przy wysyłce wiadomości. Spróbuj ponownie.');
      });
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contact-form" noValidate>
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-darktext mb-1">
          {t('contactForm.nameLabel')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          className={`w-full px-4 py-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="reply_to" className="block text-sm font-medium text-darktext mb-1">
          {t('contactForm.emailLabel')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="reply_to"
          id="reply_to"
          className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-darktext mb-1">
          {t('contactForm.phoneLabel')}
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-darktext mb-1">
          {t('contactForm.serviceLabel')}
        </label>
        <select
          name="service"
          id="service"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm"
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
        <label htmlFor="message" className="block text-sm font-medium text-darktext mb-1">
          {t('contactForm.messageLabel')} <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className={`w-full px-4 py-2.5 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
          aria-invalid={!!errors.message}
        ></textarea>
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>

      <div className="flex items-start">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className={`h-4 w-4 text-primary border-gray-300 rounded mt-1 ${errors.consent ? 'ring-2 ring-red-500' : ''}`}
        />
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className="font-medium text-darktext">
            {t('contactForm.consentLabel')} <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-500 text-xs">
            <Trans i18nKey="contactForm.consentDetails">
              Administratorem danych jest Legal In. Dane będą przetwarzane w celu odpowiedzi na zapytanie. <a href="/polityka-prywatnosci" className="underline hover:text-primary">Dowiedz się więcej</a>.
            </Trans>
          </p>
          {errors.consent && <p className="text-red-600 text-xs mt-1">{errors.consent}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 font-medium transition"
        >
          {t('contactForm.submitButton')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
