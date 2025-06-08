import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import useTranslation and Trans
import PageTitle from '../components/PageTitle.tsx';
import { CLIENT_TYPES_DATA_KEYS } from '../constants.ts'; // Use _KEYS version
import { Link } from 'react-router-dom';
import { ArrowRightIcon, IconProps } from '../components/IconComponents.tsx';
import { ClientTypeKeys } from '../types.ts'; // Use ClientTypeKeys type

const clientsPageHeroImageUrl = 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1920&auto=format&fit=crop';

const ClientsPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.clients') + ' - Legal In';
  }, [t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('clientsPage.title')} 
        subtitle={t('clientsPage.subtitle')} 
        imageUrl={clientsPageHeroImageUrl}
      />

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-darktext max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            {t('clientsPage.introText')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {CLIENT_TYPES_DATA_KEYS.map((clientTypeKey: ClientTypeKeys, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-start h-full transform hover:shadow-xl transition-shadow duration-300">
                <div className="mb-5 flex items-center">
                  {React.cloneElement<IconProps>(clientTypeKey.icon, { className: 'w-10 h-10 text-primary mr-4' })}
                  <h3 className="text-2xl font-semibold text-primary">{t(clientTypeKey.nameKey)}</h3>
                </div>
                <p className="text-mediumtext text-sm leading-relaxed flex-grow mb-6">{t(clientTypeKey.descriptionKey)}</p>
                 <Link
                    to={`/kontakt?client_type=${encodeURIComponent(t(clientTypeKey.nameKey))}`}
                    id={`client-type-cta-${index}`}
                    className="mt-auto inline-flex items-center text-primary hover:text-neutraldark font-medium group"
                  >
                    {t('clientsPage.ctaAskOffer')}
                    <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
              </div>
            ))}
          </div>
           <p className="text-center text-lg text-darktext max-w-3xl mx-auto mt-12 md:mt-16 leading-relaxed">
             <Trans i18nKey="clientsPage.outroText" components={{ strong: <strong /> }} />
          </p>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('clientsPage.finalCta.title')}</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('clientsPage.finalCta.text')}
            </p>
            <Link
                to="/kontakt"
                id="clients-contact-cta"
                className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all"
            >
                {t('clientsPage.finalCta.ctaButton')}
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;