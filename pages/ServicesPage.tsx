import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle.tsx';
import { SERVICES_DATA_KEYS } from '../constants.ts';
import { ServiceKeys } from '../types.ts';
import { ArrowRightIcon, IconProps } from '../components/IconComponents.tsx';
import SimpleAccordion from '../components/SimpleAccordion';

const servicesPageHeroImageUrl = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // ✅ Wygeneruj accordionData z tłumaczeń
  const rawAccordionData = t('servicesAccordion', { returnObjects: true }) as Record<
    string,
    { title: string; link: string; url: string }[]
  >;

  const accordionData = Object.entries(rawAccordionData).map(([title, children]) => ({
    title: t(`${title}`),
    children: children.map((child) => ({
      label: child.title,
      link: child.url,
    })),
  }));

  useEffect(() => {
    document.title = t('nav.services') + ' - Legal In';
    
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location, t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('servicesPage.title')} 
        subtitle={t('servicesPage.subtitle')} 
        imageUrl={servicesPageHeroImageUrl}
      />

      {/* ✅ Accordion z tłumaczeń */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAccordion items={accordionData} />
        </div>
      </section>

      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {SERVICES_DATA_KEYS.map((serviceKey: ServiceKeys, index: number) => (
              <div 
                key={serviceKey.id} 
                id={serviceKey.id} 
                className={`p-8 md:p-12 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? 'bg-lightbg' : 'bg-white'}`}
              >
                {serviceKey.icon && (
                  <div className={`flex-shrink-0 p-5 rounded-full bg-primary`}>
                    {React.cloneElement<IconProps>(serviceKey.icon, { className: `w-16 h-16 text-white` })}
                  </div>
                )}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t(serviceKey.titleKey)}</h3>
                  <p className="text-darktext leading-relaxed mb-6">{t(serviceKey.longDescriptionKey)}</p>
                  <Link
                    to={`/kontakt?service=${serviceKey.id}`}
                    id={`service-detail-cta-${serviceKey.id}`}
                    className="inline-flex items-center bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg shadow-md hover:shadow-lg transition-all group"
                  >
                    {t('servicesPage.ctaConsultation')}
                    <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('servicesPage.finalCta.title')}</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('servicesPage.finalCta.text')}
            </p>
            <Link
                to="/kontakt"
                id="services-contact-cta"
                className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all"
            >
                {t('servicesPage.finalCta.ctaButton')}
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;