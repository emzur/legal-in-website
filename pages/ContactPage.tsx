import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import PageTitle from '../components/PageTitle.tsx';
import ContactForm from '../components/ContactForm.tsx';
import { COMPANY_INFO } from '../constants.ts';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, FacebookIcon } from '../components/IconComponents.tsx';

const contactPageHeroImageUrl = 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1920&auto=format&fit=crop';

const ContactPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.contact') + ' - Legal In';
  }, [t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('contactPage.title')}
        subtitle={t('contactPage.subtitle')}
        imageUrl={contactPageHeroImageUrl}
      />

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="md:col-span-3 bg-white p-8 md:p-10 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-primary mb-8">{t('contactPage.formTitle')}</h2>
              <ContactForm />
            </div>

            <div className="md:col-span-2 bg-primary text-white p-8 md:p-10 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold mb-8">{t('contactPage.detailsTitle')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t('contactPage.addressLabel')}</h3>
                  <p className="flex items-start text-gray-200">
                    <MapPinIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-gray-300" />
                    <span>{t(COMPANY_INFO.addressKey)}</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t('contactPage.phoneLabel')}</h3>
                  <p className="flex items-center text-gray-200">
                    <PhoneIcon className="w-6 h-6 mr-3 flex-shrink-0 text-gray-300" />
                    <a href={`tel:${t(COMPANY_INFO.phoneKey).replace(/\s/g, '')}`} className="hover:text-white transition-colors">{t(COMPANY_INFO.phoneKey)}</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t('contactPage.emailLabel')}</h3>
                  <p className="flex items-center text-gray-200">
                    <EnvelopeIcon className="w-6 h-6 mr-3 flex-shrink-0 text-gray-300" />
                    <a href={`mailto:${t(COMPANY_INFO.emailKey)}`} className="hover:text-white transition-colors">{t(COMPANY_INFO.emailKey)}</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t('contactPage.hoursLabel')}</h3>
                  <p className="text-gray-200">{t(COMPANY_INFO.openingHoursKey)}</p>
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('contactPage.facebookLabel')}</h3>
                  <a 
                    href={COMPANY_INFO.facebookUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-white hover:opacity-80 transition-opacity group"
                    aria-label={t('footer.facebookAria')}
                    id="contact-page-facebook-link"
                  >
                    <FacebookIcon className="w-8 h-8 mr-2 text-white" />
                    <span className="group-hover:underline">{t('contactPage.facebookVisit')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">{t('contactPage.mapTitle')}</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.3055875533325!2d17.038350315924785!3d51.10331487956917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3aa26fda03d%3A0x93f5e7ebc4158c83!2spl.%20Walerego%20Wróblewskiego%203a%2C%20lok.7%2C%2050-413%20Wrocław!5e0!3m2!1spl!2spl!4v1717958820001!5m2!1spl!2spl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title={t('contactPage.mapTitle')} 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <p className="mt-6 text-sm text-mediumtext">{t('contactPage.mapCaption')}</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;