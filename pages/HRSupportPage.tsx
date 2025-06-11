import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import PageTitle from '@/components/PageTitle';

const HRSupportPage = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
    document.title = 'Wsparcie HR w zatrudnianiu cudzoziemców - Legal In';
  }, [location]);

  // Pobranie servicesAccordion i znalezienie sekcji HR
  const servicesAccordion = t('servicesAccordion', {
    returnObjects: true
  }) as Record<string, { title: string; url: string }[]>;

  const hrAccordionKey = Object.keys(servicesAccordion).find((key) =>
    servicesAccordion[key]?.some((item) => item.url.startsWith('/uslugi/hr'))
  );

  const hrSections = hrAccordionKey ? servicesAccordion[hrAccordionKey] : [];

  return (
    <>
      <PageTitle title={t('serviceDescriptions.hrSupport.title')} />

      <div className="container mx-auto px-4 py-16">
        <p className="text-darktext whitespace-pre-line mb-12">
          <Trans
            i18nKey="serviceDescriptions.hrSupport.intro"
            components={{
              strong: <strong className="font-bold text-primary" />
            }}
          />
        </p>

        {hrSections.map(({ url, title }) => {
          const id = url.split('#')[1]; // pobiera ID z URLa
          return (
            <section key={id} id={id} className="mb-16 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {title}
              </h2>
              <p className="text-darktext whitespace-pre-line">
                <Trans
                  i18nKey={`serviceDescriptions.hrSupport.sections.${id}`}
                  components={{
                    strong: <strong className="font-bold text-primary" />
                  }}
                />
              </p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default HRSupportPage;