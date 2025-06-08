import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import PageTitle from '../components/PageTitle.tsx';
import TestimonialCard from '../components/TestimonialCard.tsx';
import { TESTIMONIALS_DATA_KEYS } from '../constants.ts'; // Use _KEYS version
import { TestimonialKeys } from '../types.ts'; // Use TestimonialKeys type
import { Link } from 'react-router-dom';

const testimonialsPageHeroImageUrl = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const TestimonialsPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.testimonials') + ' - Legal In';
  }, [t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('testimonialsPage.title')}
        subtitle={t('testimonialsPage.subtitle')}
        imageUrl={testimonialsPageHeroImageUrl}
      />

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {TESTIMONIALS_DATA_KEYS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {TESTIMONIALS_DATA_KEYS.map((testimonialKey: TestimonialKeys) => (
                <TestimonialCard 
                  key={testimonialKey.id} 
                  quote={t(testimonialKey.quoteKey)}
                  author={t(testimonialKey.authorKey)}
                  company={testimonialKey.companyKey ? t(testimonialKey.companyKey) : undefined}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-darktext">{t('testimonialsPage.noTestimonials')}</p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('testimonialsPage.finalCta.title')}</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('testimonialsPage.finalCta.text')}
            </p>
            <Link
                to="/kontakt"
                id="testimonials-contact-cta"
                className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all"
            >
                {t('testimonialsPage.finalCta.ctaButton')}
            </Link>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;