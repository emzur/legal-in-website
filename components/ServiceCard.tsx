import React from 'react';
import { Link } from 'react-router-dom';
// ServiceKeys is not directly used here, but the props will be derived from it
// import { ServiceKeys } from '../types.ts';
import { ArrowRightIcon } from './IconComponents.tsx';

interface ServiceCardProps {
  // Props are now the translated strings
  id: string;
  title: string;
  shortDescription: string;
  imageUrl?: string;
  ctaLink?: string;
  ctaText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  shortDescription, 
  imageUrl, 
  ctaLink, 
  ctaText 
}) => {
  const placeholderImage = `https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&h=250&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full transform hover:shadow-xl transition-shadow duration-300">
      <Link to={ctaLink || '#'} id={`service-card-image-link-${id}`} className="block">
        <img 
          src={imageUrl || placeholderImage} 
          alt={title} // Alt text is the translated title
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-mediumtext text-sm mb-4 flex-grow leading-relaxed">{shortDescription}</p>
        {ctaLink && ctaText && (
          <Link
            to={ctaLink}
            id={`service-card-cta-${id}`}
            className="mt-auto inline-flex items-center text-primary hover:text-neutraldark font-medium group"
          >
            {ctaText}
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;