import React from 'react';
import type { IconProps } from './components/IconComponents.tsx'; // For typing icons

// Changed from NavLinkItem to NavLinkItemKeys
export interface NavLinkItemKeys {
  path: string;
  labelKey: string; // Changed from label to labelKey
}

// Updated Service interface to use translation keys
export interface ServiceKeys {
  id: string;
  titleKey: string;
  shortDescriptionKey: string;
  longDescriptionKey: string;
  icon?: React.ReactElement<IconProps>; 
  imageUrl?: string;
  ctaLink?: string;
  ctaTextKey?: string;
}

// Updated Testimonial interface to use translation keys
export interface TestimonialKeys {
  id: string;
  quoteKey: string;
  authorKey: string;
  companyKey?: string;
}

// Updated TeamMember interface to use translation keys
export interface TeamMemberKeys {
  id: string;
  nameKey: string;
  roleKey: string;
  imageUrl: string; // imageUrl remains as is
  bioKey?: string;
}

// Updated BlogPost interface to use translation keys
export interface BlogPostKeys {
  id: string;
  titleKey: string;
  dateKey: string; // Could also be a non-translatable date string if preferred
  authorKey: string;
  summaryKey: string;
  imageUrl: string; // imageUrl remains as is
  link: string; // link remains as is
}

// Updated ClientType interface to use translation keys
export interface ClientTypeKeys {
  nameKey: string;
  descriptionKey: string;
  icon: React.ReactElement<IconProps>;
}

// For Benefits, we can define a similar structure if they are complex
// Or if they are simple like in constants.ts (title, shortDescription), 
// we can use ServiceKeys or create a specific BenefitKeys interface.
// For simplicity, let's assume benefits will also use keys.
export interface BenefitKeys {
  id: string;
  titleKey: string;
  descriptionKey: string; // Changed from shortDescription to a more generic description
  icon?: React.ReactElement<IconProps>;
}
