import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/PageTitle';
import { Trans } from 'react-i18next';

const sections = [
  { id: 'przeniesienie-z-agencji', title: 'Obsługa procesu przeniesienia pracowników z agencji pracy' },
  { id: 'pozwolenia-na-prace', title: 'Uzyskanie pozwoleń na pracę' },
  { id: 'legalnosc-pobytu', title: 'Monitorowanie legalności pobytów cudzoziemców' },
  { id: 'audyt-akt', title: 'Audyt akt pracowniczych' },
  { id: 'szkolenia', title: 'Szkolenia działów HR' },
  { id: 'pomoc-w-pobycie', title: 'Pomoc w organizacji pobytu cudzoziemców' },
  { id: 'delegowanie', title: 'Obsługa delegowania pracowników' }
];

const HRSupportPage = () => {
  const location = useLocation();

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

 const { t } = useTranslation();

 return (
    <>
      <PageTitle title={t('serviceDescriptions.hrSupport.title')} />
      <div className="container mx-auto px-4 py-16">
        <p className="text-darktext whitespace-pre-line">
          <Trans
            i18nKey="serviceDescriptions.hrSupport.intro"
            components={{ strong: <strong className="font-bold text-primary" /> }}
          />
        </p>
  
        {sections.map(({ id, title }) => (
          <section key={id} id={id} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
            <p className="text-darktext whitespace-pre-line">
              <Trans
                i18nKey={`serviceDescriptions.hrSupport.sections.${id}`}
                components={{ strong: <strong className="font-bold text-primary" /> }}
              />
            </p>
          </section>
        ))}
      </div>
    </>
  );
};

export default HRSupportPage;