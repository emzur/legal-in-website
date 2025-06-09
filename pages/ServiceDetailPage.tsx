// src/pages/ServiceDetailPage.tsx
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function ServiceDetailPage() {
  const { category } = useParams();
  const { t } = useTranslation();
  const location = useLocation();

  const data = t(`servicesAccordion`, { returnObjects: true }) as Record<
    string,
    { title: string; url: string }[]
  >;

  const decodedCategory = decodeURIComponent(category || '');

  const title = Object.keys(data).find(
    (key) => key.toLowerCase().replace(/\s+/g, '-') === decodedCategory
  );

  const children = title ? data[title] : [];

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  if (!title) {
    return <div className="p-8">Brak danych dla tej kategorii usług.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
        {title}
      </h1>

      <ul className="space-y-6">
        {children.map((child, index) => (
          <li key={index} id={child.title.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-darktext mb-2">
              {child.title}
            </h2>
            <p className="text-gray-700">
              {/* Możesz dodać tłumaczenia np. servicesDescriptions[child.url] */}
              {t(`serviceDescriptions.${child.url}`)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}