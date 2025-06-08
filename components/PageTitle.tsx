import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  imageUrl?: string; // Optional image URL for background
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, imageUrl }) => {
  const defaultImageUrl = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Updated Default Image
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 20, 40, 0.6), rgba(0, 20, 40, 0.6)), url(${imageUrl || defaultImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className="text-white text-center flex flex-col justify-center items-center" 
      style={{ ...bgStyle, minHeight: '350px', height: '350px' }} // Fixed height
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageTitle;