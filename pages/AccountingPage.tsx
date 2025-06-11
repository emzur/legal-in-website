import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import PageTitle from '@/components/PageTitle';

const sections = [
  { id: 'ryczalt', title: 'Obsługa księgowa – Ryczałt ewidencjonowany' },
  { id: 'kpir', title: 'Obsługa księgowa – Księga Przychodów i Rozchodów (KPiR)' },
  { id: 'ksiegi-handlowe', title: 'Obsługa księgowa – księgi handlowe dla spółek' }
];

const AccountingPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const intro = t('serviceDescriptions.ksiegowosc.intro', {
    returnObjects: true,
  }) as {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    imageAlt1: string;
    imageAlt2: string;
    tableTitle: string;
    tableHeaders: string[];
    tableRows: string[][];
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
    document.title = t('serviceDescriptions.ksiegowosc.title') + ' - Legal In';
  }, [location, t]);

  return (
    <>
      <PageTitle title={t('serviceDescriptions.ksiegowosc.title')} />
      <div className="container mx-auto px-4 py-16 space-y-10">
        
        <p className="text-darktext whitespace-pre-line">
          <Trans
            i18nKey="serviceDescriptions.ksiegowosc.intro.paragraph1"
            components={{ strong: <strong className="font-bold text-primary" /> }}
          />
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">{intro.tableTitle}</h2>
          <table className="w-full border border-primary text-darktext mb-8 text-sm md:text-base border-collapse">
            <thead>
              <tr>
                {intro.tableHeaders.map((header, i) => (
                  <th
                    key={`thead-${i}`}
                    className={`border border-primary px-4 py-3 bg-primary/10 font-semibold text-primary ${
                      i === 0
                        ? 'text-left w-8/10'
                        : 'text-center w-1/10'
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {intro.tableRows.map((row, i) => (
                <tr key={`row-${i}`} className="hover:bg-primary/5">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-2 border border-primary text-sm ${
                        j === 0
                          ? 'text-left w-8/10'
                          : 'text-center w-1/10'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-darktext whitespace-pre-line">
          <Trans
            i18nKey="serviceDescriptions.ksiegowosc.intro.paragraph2"
            components={{ strong: <strong className="font-bold text-primary" /> }}
          />
        </p>

        <img
          src="/public/assets/ksiegowosc-1.png"
          alt={intro.imageAlt1}
          className="w-full md:w-4/5 mx-auto rounded-lg shadow-md"
        />

        <p className="text-darktext whitespace-pre-line">
          <Trans
            i18nKey="serviceDescriptions.ksiegowosc.intro.paragraph3"
            components={{ strong: <strong className="font-bold text-primary" /> }}
          />
        </p> 
        
        <img
          src="/public/assets/ksiegowosc-2.png"
          alt={intro.imageAlt2}
          className="w-full md:w-1/4 mx-auto rounded-lg shadow-md"
        />

        <p className="text-darktext whitespace-pre-line">
          <Trans
            i18nKey="serviceDescriptions.ksiegowosc.intro.paragraph4"
            components={{ strong: <strong className="font-bold text-primary" /> }}
          />
        </p>   

        {sections.map(({ id, title }) => (
          <section key={id} id={id} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
            <p className="text-darktext whitespace-pre-line">
              <Trans
                i18nKey={`serviceDescriptions.ksiegowosc.sections.${id}`}
                components={{ strong: <strong className="font-bold text-primary" /> }}
              />
            </p>
          </section>
        ))}
      </div>
    </>
  );
};

export default AccountingPage;