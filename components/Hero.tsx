import React from 'react';
import { Link } from 'react-router-dom';
import homeHero from '../src/content/homeHero.json';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          {homeHero.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          {homeHero.subtitle}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
          <Link
            to="/uslugi"
            id="hero-cta-services"
            className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            {homeHero.ctaServices}
          </Link>
          <Link
            to="/kontakt"
            id="hero-cta-contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            {homeHero.ctaContact}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;