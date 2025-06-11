import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import PageTitle from '@/components/PageTitle';

const sectionIds = [
  'pozwolenia-na-prace',
  'pobyt-czasowy'
];

const LegalizationPage = () => {
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
    document.title = t('serviceDescriptions.legalization.title') + ' - Legal In';
  }, [location, t]);

  // Pobierz tytuły z servicesAccordion
  const servicesAccordion = t('servicesAccordion', {
    returnObjects: true,
  }) as Record<string, { title: string; url: string }[]>;

  // Znajdź odpowiednią sekcję w servicesAccordion
  const matchedTitle = Object.keys(servicesAccordion).find((title) =>
    servicesAccordion[title]?.[0]?.url?.startsWith('/uslugi/legalizacja')
  );

  const sectionTitles =
    matchedTitle && servicesAccordion[matchedTitle]
      ? servicesAccordion[matchedTitle]
      : [];

  return (
    <>
      <PageTitle title={t('serviceDescriptions.legalization.title')} />
      <div className="container mx-auto px-4 py-16">
        <p className="text-darktext whitespace-pre-line mb-8">
          <Trans
            i18nKey="serviceDescriptions.legalization.intro"
            components={{ strong: <strong className="font-bold text-primary" /> }}
          />
        </p>

        {sectionIds.map((id) => {
          const header = sectionTitles.find((item) =>
            item.url.includes(`#${id}`)
          )?.title;

          return (
            <section key={id} id={id} className="mb-16 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-primary mb-4">{header || id}</h2>
              <p className="text-darktext whitespace-pre-line">
                <Trans
                  i18nKey={`serviceDescriptions.legalization.sections.${id}`}
                  components={{ strong: <strong className="font-bold text-primary" /> }}
                />
              </p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default LegalizationPage;