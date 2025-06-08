import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { ArrowLeftIcon } from '../components/IconComponents.tsx';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('notFoundPage.title') + ' - Legal In';
  }, [t]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4 py-16 bg-lightbg">
      <img 
        src="https://picsum.photos/seed/404page/300/200?grayscale&blur=1" 
        alt={t('notFoundPage.heading')} 
        className="w-64 md:w-80 h-auto mb-10 rounded-lg shadow-md"
        loading="lazy"
      />
      <h1 className="text-7xl md:text-8xl font-extrabold text-primary mb-4">{t('notFoundPage.title')}</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-darktext mb-6">{t('notFoundPage.heading')}</h2>
      <p className="text-lg text-mediumtext mb-10 max-w-md leading-relaxed">
        {t('notFoundPage.message')}
      </p>
      <Link
        to="/"
        id="notfound-gohome-cta"
        className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors text-lg"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2.5" />
        {t('notFoundPage.ctaButton')}
      </Link>
    </div>
  );
};

export default NotFoundPage;