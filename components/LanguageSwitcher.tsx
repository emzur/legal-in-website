import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const activeLangButtonStyle = "bg-primary text-white";
  const inactiveLangButtonStyle = "bg-gray-200 text-darktext hover:bg-gray-300";

  return (
    <div className="flex space-x-1 items-center" role="group" aria-label={t('langSwitcher.ariaLabel', 'Language selection')}>
      <button
        onClick={() => changeLanguage('pl')}
        disabled={i18n.resolvedLanguage === 'pl'}
        className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${i18n.resolvedLanguage === 'pl' ? activeLangButtonStyle : inactiveLangButtonStyle}`}
        aria-label={t('langSwitcher.pl', 'Zmień język na polski')}
        aria-pressed={i18n.resolvedLanguage === 'pl'}
      >
        PL
      </button>
      <button
        onClick={() => changeLanguage('uk')}
        disabled={i18n.resolvedLanguage === 'uk'}
        className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${i18n.resolvedLanguage === 'uk' ? activeLangButtonStyle : inactiveLangButtonStyle}`}
        aria-label={t('langSwitcher.uk', 'Zmień język na ukraiński')}
        aria-pressed={i18n.resolvedLanguage === 'uk'}
      >
        UA
      </button>
    </div>
  );
};

export default LanguageSwitcher;