import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { COMPANY_INFO, NAV_LINKS_KEYS } from '../constants.ts'; // NAV_LINKS_KEYS for quick links
import { PhoneIcon, EnvelopeIcon, MapPinIcon, FacebookIcon } from './IconComponents.tsx';

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <footer className="bg-darktext text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('footer.aboutTitle', 'Legal In')}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.quickLinksTitle', 'Szybkie Linki')}</h3>
            <ul className="space-y-2 text-sm">
              {/* Filter relevant links for footer, e.g., About, Services, Contact, Blog */}
              {NAV_LINKS_KEYS.filter(link => ['nav.about', 'nav.services', 'nav.contact', 'nav.blog'].includes(link.labelKey)).map(link => (
                 <li key={link.path}><Link to={link.path} className="text-gray-300 hover:text-white transition-colors">{t(link.labelKey)}</Link></li>
              ))}
               <li><Link to="/polityka-prywatnosci" className="text-gray-300 hover:text-white transition-colors">{t('nav.privacyPolicy')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.contactTitle', 'Kontakt')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-gray-300" />
                <span className="text-gray-300">{t(COMPANY_INFO.addressKey)}</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0 text-gray-300" />
                <a href={`tel:${t(COMPANY_INFO.phoneKey).replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">{t(COMPANY_INFO.phoneKey)}</a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0 text-gray-300" />
                <a href={`mailto:${t(COMPANY_INFO.emailKey)}`} className="text-gray-300 hover:text-white transition-colors">{t(COMPANY_INFO.emailKey)}</a>
              </li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">{t(COMPANY_INFO.openingHoursKey)}</p>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.socialTitle', 'Znajdź Nas')}</h3>
            <a 
              href={COMPANY_INFO.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center p-2 bg-transparent hover:bg-neutraldark rounded-full transition-colors"
              aria-label={t('footer.facebookAria', 'Legal In na Facebooku')}
              id="footer-facebook-link"
            >
              <FacebookIcon className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p className="text-gray-400">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;