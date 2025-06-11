import { useParams, useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { useEffect } from 'react';

export default function ServiceDetailPage() {
  const { category } = useParams();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const decodedCategory = decodeURIComponent(category || '');

  // Mapy: slug → klucz serviceDescriptions (np. hr → hrSupport)
  const slugToKeyMap: Record<string, string> = {
    hr: 'hrSupport',
    legalizacja: 'legalization',
    rejestracja: 'rejestracja',
    biznes: 'biznes',
    ksiegowosc: 'ksiegowosc',
    kadry: 'kadry',
  };

  const slug = decodedCategory;
  const key = slugToKeyMap[slug];

  const sectionContent = t(`serviceDescriptions.${key}`, {
    returnObjects: true,
  }) as {
    title: string;
    intro: string;
    sections: Record<string, string>;
  };

  const servicesAccordion = t('servicesAccordion', {
    returnObjects: true,
  }) as Record<string, { title: string; url: string }[]>;

  // Znajdź odpowiadający title w servicesAccordion
  const matchedTitle = Object.keys(servicesAccordion).find((title) => {
    return (
      servicesAccordion[title]?.[0]?.url?.startsWith(`/uslugi/${slug}`) ||
      title === sectionContent.title
    );
  });

  const sectionIds = Object.keys(sectionContent.sections);
  const sectionTitles =
    matchedTitle && servicesAccordion[matchedTitle]
      ? servicesAccordion[matchedTitle]
      : [];

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  if (!key || !sectionContent || !matchedTitle) {
    return (
      <div className="p-8 text-red-600">
        Brak danych dla tej kategorii usług.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
       {sectionContent.title}
      </h1>

      <p className="text-darktext whitespace-pre-line mb-8">
        <Trans
          i18nKey={`serviceDescriptions.${key}.intro`}
          components={{ strong: <strong className="font-bold text-primary" /> }}
        />
      </p>

      <ul className="space-y-12">
        {sectionIds.map((id, index) => {
          const header = sectionTitles.find((item) =>
            item.url.includes(`#${id}`)
          )?.title;

          return (
            <li key={id} id={id} className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {header || id}
              </h2>
              <p className="text-darktext whitespace-pre-line">
                <Trans
                  i18nKey={`serviceDescriptions.${key}.sections.${id}`}
                  components={{ strong: <strong className="font-bold text-primary" /> }}
                />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}