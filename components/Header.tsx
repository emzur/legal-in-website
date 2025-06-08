import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { NAV_LINKS_KEYS } from '../constants.ts'; // Changed to NAV_LINKS_KEYS
import { NavLinkItemKeys } from '../types.ts'; // Changed to NavLinkItemKeys
import { Bars3Icon, XMarkIcon } from './IconComponents.tsx';
import LanguageSwitcher from './LanguageSwitcher.tsx'; // Import LanguageSwitcher

const Header: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/legal-in-logo.jpeg"
            alt="Legal In logo"
            className="h-10 w-auto"
          />
          <span className="sr-only">Legal In</span>
        </Link>
          </div>

          {/* Desktop Navigation & Language Switcher */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-1 lg:space-x-2">
              {NAV_LINKS_KEYS.map((item: NavLinkItemKeys) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-darktext hover:bg-lightbg hover:text-primary'
                    }`
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </nav>
            <div className="ml-4"> {/* Language Switcher on Desktop */}
              <LanguageSwitcher />
            </div>
          </div>


          {/* Mobile Menu Button & Language Switcher */}
          <div className="md:hidden flex items-center">
             <div className="mr-2"> {/* Language Switcher on Mobile */}
              <LanguageSwitcher />
            </div>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-lightbg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              id="mobile-menu-button"
            >
              <span className="sr-only">{t('mobileMenu.open', 'Otwórz menu')}</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 md:top-24 inset-x-0 z-40 transform transition-transform duration-300 ease-in-out bg-white shadow-lg rounded-b-lg" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS_KEYS.map((item: NavLinkItemKeys) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-darktext hover:bg-lightbg hover:text-primary'
                  }`
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;