import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const ServiceCategoryPage = () => {
  const { category: categorySlug } = useParams();
  const { t } = useTranslation();
  const location = useLocation();

  const allServices = t('servicesAccordion', { returnObjects: true }) as Record<
    string,
    { title: string; url: string }[]
  >;

  // Znajdź tytuł głównej kategorii na podstawie slug'a (np. "hr")
  const matchedCategory = Object.entries(allServices).find(([_title, services]) => {
    const firstSlug = services[0]?.url.split('/')[2]; // np. "hr" z "/uslugi/hr/pozwolenie"
    return firstSlug === categorySlug;
  });

  const title = matchedCategory?.[0] || '';
  const services = matchedCategory?.[1] || [];

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash && hash !== categorySlug) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location, categorySlug]);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-primary mb-10">{title}</h1>
  
      <div className="space-y-12">
        {services.map((service, index) => {
          const serviceSlug = service.url.split('/').pop(); // np. "pozwolenia-na-prace"
          return (
            <section key={index} id={serviceSlug}>
              <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
              <p className="text-darktext mb-8">
                {t(`serviceDescriptions.${matchedCategory?.[0]}.sections.${serviceSlug}`)}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategoryPage;