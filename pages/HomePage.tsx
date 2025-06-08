import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import ServiceCard from '../components/ServiceCard.tsx';
import TestimonialCard from '../components/TestimonialCard.tsx';
import { SERVICES_DATA_KEYS, TESTIMONIALS_DATA_KEYS } from '../constants.ts'; // Use _KEYS versions
import { ServiceKeys, TestimonialKeys } from '../types.ts'; // Use _KEYS versions for types
import { ArrowRightIcon } from '../components/IconComponents.tsx';

const HomePage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.home') + ' - Legal In'; // Example of using t for title
  }, [t]);

  const featuredServicesKeys = SERVICES_DATA_KEYS.slice(0, 3);
  const featuredTestimonialKey = TESTIMONIALS_DATA_KEYS.length > 0 ? TESTIMONIALS_DATA_KEYS[0] : null;

  const heroImageUrl = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const heroBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 20, 40, 0.65), rgba(0, 20, 40, 0.65)), url(${heroImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-white py-24 md:py-40" style={heroBgStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t('homePage.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            {t('homePage.hero.subtitle')}
          </p>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
            <Link
              to="/uslugi"
              id="hero-cta-services"
              className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              {t('homePage.hero.ctaServices')}
            </Link>
            <Link
              to="/kontakt"
              id="hero-cta-contact"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              {t('homePage.hero.ctaContact')}
            </Link>
          </div>
        </div>
      </section>

      {/* Short About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">{t('homePage.shortAbout.title')}</h2>
          <p className="text-lg text-darktext max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('homePage.shortAbout.text')}
          </p>
          <Link
            to="/o-nas"
            id="about-cta-more"
            className="inline-flex items-center text-primary hover:text-neutraldark font-semibold group transition-colors"
          >
            {t('homePage.shortAbout.ctaMore')}
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 text-primary" />
          </Link>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 md:mb-16">{t('homePage.featuredServices.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredServicesKeys.map((serviceKey: ServiceKeys) => (
              <ServiceCard 
                key={serviceKey.id} 
                id={serviceKey.id}
                title={t(serviceKey.titleKey)}
                shortDescription={t(serviceKey.shortDescriptionKey)}
                imageUrl={serviceKey.imageUrl}
                ctaLink={serviceKey.ctaLink}
                ctaText={serviceKey.ctaTextKey ? t(serviceKey.ctaTextKey) : undefined}
              />
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/uslugi"
              id="services-cta-all"
              className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all"
            >
              {t('homePage.featuredServices.ctaAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 md:mb-16">{t('homePage.whyChooseUs.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('homePage.whyChooseUs.item1Title')}</h3>
              <p className="text-mediumtext leading-relaxed">{t('homePage.whyChooseUs.item1Text')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('homePage.whyChooseUs.item2Title')}</h3>
              <p className="text-mediumtext leading-relaxed">{t('homePage.whyChooseUs.item2Text')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('homePage.whyChooseUs.item3Title')}</h3>
              <p className="text-mediumtext leading-relaxed">{t('homePage.whyChooseUs.item3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      {featuredTestimonialKey && (
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 md:mb-12">{t('homePage.featuredTestimonial.title')}</h2>
            <div className="max-w-2xl mx-auto bg-white text-darktext p-8 md:p-10 rounded-lg shadow-xl">
                <TestimonialCard
                  quote={t(featuredTestimonialKey.quoteKey)}
                  author={t(featuredTestimonialKey.authorKey)}
                  company={featuredTestimonialKey.companyKey ? t(featuredTestimonialKey.companyKey) : undefined}
                />
            </div>
            <Link
              to="/opinie"
              id="testimonials-cta-all"
              className="mt-10 md:mt-12 inline-flex items-center text-white hover:text-gray-200 font-semibold group transition-colors"
            >
              {t('homePage.featuredTestimonial.ctaAll')}
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 text-white" />
            </Link>
          </div>
        </section>
      )}

      {/* Final Call to Action */}
      <section className="py-16 md:py-24 bg-lightbg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">{t('homePage.finalCta.title')}</h2>
          <p className="text-mediumtext max-w-xl mx-auto mb-10 leading-relaxed">
            {t('homePage.finalCta.text')}
          </p>
          <Link
            to="/kontakt"
            id="final-cta-contact"
            className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-md text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t('homePage.finalCta.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;