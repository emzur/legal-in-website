import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import PageTitle from '@/components/PageTitle';

const sectionIds = [
  'kadrowa',
  'placowa',
  'delegowanie-ue',
  'ppk',
  'bhp-badania',
  'rekrutacja',
];

const HRPayrollPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
    document.title = t('serviceDescriptions.kadry.title') + ' - Legal In';
  }, [location, t]);

  const intro = t('serviceDescriptions.kadry.intro', {
    returnObjects: true,
  }) as {
    paragraph1: string;
    paragraph2: string;
    imageAlt1: string;
  };

  const servicesAccordion = t('servicesAccordion', {
    returnObjects: true,
  }) as Record<string, { title: string; url: string }[]>;

  const matchedTitle = Object.keys(servicesAccordion).find((title) =>
    servicesAccordion[title]?.[0]?.url?.startsWith('/uslugi/kadry')
  );

  const sectionTitles =
    matchedTitle && servicesAccordion[matchedTitle]
      ? servicesAccordion[matchedTitle]
      : [];

  return (
    <>
      <PageTitle title={t('serviceDescriptions.kadry.title')} />
      <div className="container mx-auto px-4 py-16 space-y-10">
      <p className="text-darktext whitespace-pre-line">
          <Trans
            i18nKey="serviceDescriptions.kadry.intro.paragraph1"
            components={{ strong: <strong className="font-bold text-primary" /> }}
          />
        </p>

        <img
  src="/assets/ksiegowosc-1.png"
  alt={intro.imageAlt1}
  className="w-full md:w-2/3 mx-auto rounded-lg shadow-md"
/>

        <p className="text-darktext whitespace-pre-line">
          <Trans
            i18nKey="serviceDescriptions.kadry.intro.paragraph2"
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
                  i18nKey={`serviceDescriptions.kadry.sections.${id}`}
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

export default HRPayrollPage;