import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ClientsPage from './pages/ClientsPage.tsx';
import BenefitsPage from './pages/BenefitsPage.tsx';
import TestimonialsPage from './pages/TestimonialsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import HRSupportPage from './pages/HRSupportPage';

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const { i18n } = useTranslation(); // Get i18n instance

  // Update the HTML lang attribute whenever the language changes
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || 'pl';
  }, [i18n.resolvedLanguage]);

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="o-nas" element={<AboutPage />} />
          <Route path="uslugi" element={<ServicesPage />} />
          <Route path="/uslugi/:categorySlug" element={<ServiceCategoryPage />} />
          <Route path="/uslugi/:categorySlug/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/uslugi/hr" element={<HRSupportPage />} />
          <Route path="dla-kogo-pracujemy" element={<ClientsPage />} />
          <Route path="korzysci" element={<BenefitsPage />} />
          <Route path="opinie" element={<TestimonialsPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="polityka-prywatnosci" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;