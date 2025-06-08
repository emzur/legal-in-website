import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import useTranslation and Trans
import PageTitle from '../components/PageTitle.tsx';
import { BENEFITS_DATA_KEYS } from '../constants.ts'; // Use _KEYS version
import { Link } from 'react-router-dom';
import { ArrowRightIcon, IconProps } from '../components/IconComponents.tsx';
import { BenefitKeys } from '../types.ts'; // Use BenefitKeys type

const benefitsPageHeroImageUrl = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop';

const BenefitsPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.benefits') + ' - Legal In';
  }, [t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('benefitsPage.title')}
        subtitle={t('benefitsPage.subtitle')}
        imageUrl={benefitsPageHeroImageUrl}
      />

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-darktext max-w-3xl mx-auto mb-16 leading-relaxed">
            {t('benefitsPage.introText')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {BENEFITS_DATA_KEYS.map((benefitKey: BenefitKeys, index: number) => (
              <div key={index} className="flex items-start p-4">
                <div className="flex-shrink-0 mr-5 mt-1">
                  {benefitKey.icon && React.cloneElement<IconProps>(benefitKey.icon, { className: 'w-10 h-10 text-primary' })}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t(benefitKey.titleKey)}</h3>
                  <p className="text-mediumtext leading-relaxed">{t(benefitKey.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img src="https://picsum.photos/seed/benefits-image/700/350?grayscale" alt={t('benefitsPage.finalCta.title')} className="rounded-lg shadow-xl mx-auto mb-12 w-full max-w-3xl h-auto aspect-[2/1] object-cover" loading="lazy" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('benefitsPage.finalCta.title')}</h2>
            <p className="text-lg text-darktext max-w-2xl mx-auto mb-10 leading-relaxed">
              <Trans i18nKey="benefitsPage.finalCta.text" />
            </p>
            <Link
                to="/kontakt"
                id="benefits-contact-cta"
                className="inline-flex items-center bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all group"
            >
                {t('benefitsPage.finalCta.ctaButton')}
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;