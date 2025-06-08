import React from 'react';
// Updated import to use new Key-based interfaces
import { NavLinkItemKeys, ServiceKeys, TestimonialKeys, ClientTypeKeys, BenefitKeys, BlogPostKeys } from './types.ts'; 
import { BriefcaseIcon, UsersIcon, UserPlusIcon, GlobeAltIcon, ChartBarIcon, ShieldCheckIcon, LightBulbIcon } from './components/IconComponents.tsx';

// Changed NAV_LINKS to NAV_LINKS_KEYS and label to labelKey
export const NAV_LINKS_KEYS: NavLinkItemKeys[] = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/o-nas', labelKey: 'nav.about' },
  { path: '/uslugi', labelKey: 'nav.services' },
  { path: '/dla-kogo-pracujemy', labelKey: 'nav.clients' },
  { path: '/korzysci', labelKey: 'nav.benefits' },
  { path: '/opinie', labelKey: 'nav.testimonials' },
  { path: '/blog', labelKey: 'nav.blog' },
  { path: '/kontakt', labelKey: 'nav.contact' },
];

// Changed SERVICES_DATA to SERVICES_DATA_KEYS and text fields to keys
export const SERVICES_DATA_KEYS: ServiceKeys[] = [
  {
    id: 'ksiegowosc',
    titleKey: 'services.ksiegowosc.title',
    shortDescriptionKey: 'services.ksiegowosc.shortDescription',
    longDescriptionKey: 'services.ksiegowosc.longDescription',
    icon: React.createElement(BriefcaseIcon, { className: 'w-12 h-12 text-primary' }),
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&h=250&auto=format&fit=crop',
    ctaTextKey: 'services.ksiegowosc.ctaText',
    ctaLink: '/uslugi#ksiegowosc'
  },
  {
    id: 'kadry-i-place',
    titleKey: 'services.kadry-i-place.title',
    shortDescriptionKey: 'services.kadry-i-place.shortDescription',
    longDescriptionKey: 'services.kadry-i-place.longDescription',
    icon: React.createElement(UsersIcon, { className: 'w-12 h-12 text-primary' }),
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&h=250&auto=format&fit=crop',
    ctaTextKey: 'services.kadry-i-place.ctaText',
    ctaLink: '/uslugi#kadry-i-place'
  },
  {
    id: 'zakladanie-dzialalnosci',
    titleKey: 'services.zakladanie-dzialalnosci.title',
    shortDescriptionKey: 'services.zakladanie-dzialalnosci.shortDescription',
    longDescriptionKey: 'services.zakladanie-dzialalnosci.longDescription',
    icon: React.createElement(UserPlusIcon, { className: 'w-12 h-12 text-primary' }),
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&h=250&auto=format&fit=crop',
    ctaTextKey: 'services.zakladanie-dzialalnosci.ctaText',
    ctaLink: '/uslugi#zakladanie-dzialalnosci'
  },
  {
    id: 'obsluga-cudzoziemcow',
    titleKey: 'services.obsluga-cudzoziemcow.title',
    shortDescriptionKey: 'services.obsluga-cudzoziemcow.shortDescription',
    longDescriptionKey: 'services.obsluga-cudzoziemcow.longDescription',
    icon: React.createElement(GlobeAltIcon, { className: 'w-12 h-12 text-primary' }),
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&h=250&auto=format&fit=crop',
    ctaTextKey: 'services.obsluga-cudzoziemcow.ctaText',
    ctaLink: '/uslugi#obsluga-cudzoziemcow'
  },
];

// Changed BENEFITS_DATA to BENEFITS_DATA_KEYS and text fields to keys
export const BENEFITS_DATA_KEYS: BenefitKeys[] = [ 
   {
    id: 'ekspertyza',
    titleKey: 'benefits.ekspertyza.title',
    descriptionKey: 'benefits.ekspertyza.description',
    icon: React.createElement(LightBulbIcon, { className: 'w-10 h-10 text-primary' }),
  },
  {
    id: 'indywidualne-podejscie',
    titleKey: 'benefits.indywidualne-podejscie.title',
    descriptionKey: 'benefits.indywidualne-podejscie.description',
    icon: React.createElement(UsersIcon, { className: 'w-10 h-10 text-primary' }),
  },
  {
    id: 'bezpieczenstwo',
    titleKey: 'benefits.bezpieczenstwo.title',
    descriptionKey: 'benefits.bezpieczenstwo.description',
    icon: React.createElement(ShieldCheckIcon, { className: 'w-10 h-10 text-primary' }),
  },
  {
    id: 'oszczednosc-czasu',
    titleKey: 'benefits.oszczednosc-czasu.title',
    descriptionKey: 'benefits.oszczednosc-czasu.description',
    icon: React.createElement(ChartBarIcon, { className: 'w-10 h-10 text-primary' }),
  },
];

// Changed TESTIMONIALS_DATA to TESTIMONIALS_DATA_KEYS and text fields to keys
export const TESTIMONIALS_DATA_KEYS: TestimonialKeys[] = [
  {
    id: '1',
    quoteKey: 'testimonials.client1.quote',
    authorKey: 'testimonials.client1.author',
    companyKey: 'testimonials.client1.company',
  },
  {
    id: '2',
    quoteKey: 'testimonials.client2.quote',
    authorKey: 'testimonials.client2.author',
    companyKey: 'testimonials.client2.company',
  },
  {
    id: '3',
    quoteKey: 'testimonials.client3.quote',
    authorKey: 'testimonials.client3.author',
    companyKey: 'testimonials.client3.company',
  },
];

// COMPANY_INFO remains mostly static but can be used in translations if parts of it need to be dynamic.
// For now, it's assumed that these details are either language-agnostic or handled directly in components.
export const COMPANY_INFO = {
  name: "Legal In", // This might be translated via t('logo') or similar if needed elsewhere
  addressKey: "footer.contactInfo.address", // Keys for translation
  phoneKey: "footer.contactInfo.phone",
  emailKey: "footer.contactInfo.email",
  facebookUrl: "https://www.facebook.com/profile.php?id=100068560594040&locale=pl_PL", // Static URL
  openingHoursKey: "footer.contactInfo.openingHours",
};

// Changed CLIENT_TYPES_DATA to CLIENT_TYPES_DATA_KEYS and text fields to keys
export const CLIENT_TYPES_DATA_KEYS: ClientTypeKeys[] = [
  {
    nameKey: 'clientTypes.jdg.name',
    descriptionKey: 'clientTypes.jdg.description',
    icon: React.createElement(UserPlusIcon, { className: 'w-8 h-8 text-primary' })
  },
  {
    nameKey: 'clientTypes.sme.name',
    descriptionKey: 'clientTypes.sme.description',
    icon: React.createElement(BriefcaseIcon, { className: 'w-8 h-8 text-primary' })
  },
  {
    nameKey: 'clientTypes.foreign.name',
    descriptionKey: 'clientTypes.foreign.description',
    icon: React.createElement(GlobeAltIcon, { className: 'w-8 h-8 text-primary' })
  },
  {
    nameKey: 'clientTypes.startup.name',
    descriptionKey: 'clientTypes.startup.description',
    icon: React.createElement(LightBulbIcon, { className: 'w-8 h-8 text-primary' })
  }
];

// MOCK_BLOG_POSTS changed to MOCK_BLOG_POSTS_KEYS
export const MOCK_BLOG_POSTS_KEYS: BlogPostKeys[] = [
  {
    id: '1',
    titleKey: 'blogPosts.post1.title',
    dateKey: 'blogPosts.post1.date', // This could be a static date or a key if dates need formatting by lang
    authorKey: 'blogPosts.post1.author',
    summaryKey: 'blogPosts.post1.summary',
    imageUrl: 'https://picsum.photos/seed/blog1/400/250?grayscale',
    link: '/blog/najczestsze-bledy-ksiegowosc' 
  },
  {
    id: '2',
    titleKey: 'blogPosts.post2.title',
    dateKey: 'blogPosts.post2.date',
    authorKey: 'blogPosts.post2.author',
    summaryKey: 'blogPosts.post2.summary',
    imageUrl: 'https://picsum.photos/seed/blog2/400/250?grayscale',
    link: '/blog/zmiany-przepisy-kadrowe-2024'
  },
  {
    id: '3',
    titleKey: 'blogPosts.post3.title',
    dateKey: 'blogPosts.post3.date',
    authorKey: 'blogPosts.post3.author',
    summaryKey: 'blogPosts.post3.summary',
    imageUrl: 'https://picsum.photos/seed/blog3/400/250?grayscale',
    link: '/blog/forma-opodatkowania-dzialalnosci'
  }
];
