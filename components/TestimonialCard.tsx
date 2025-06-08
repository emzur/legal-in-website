import React from 'react';
// import { TestimonialKeys } from '../types.ts'; // Not directly used, props are translated strings

interface TestimonialCardProps {
  // Props are now the translated strings
  quote: string;
  author: string;
  company?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full flex flex-col">
      <p className="text-mediumtext italic mb-6 flex-grow text-base leading-relaxed">"{quote}"</p>
      <div className="mt-auto text-right">
        <p className="font-semibold text-lg text-primary">{author}</p>
        {company && <p className="text-sm text-gray-500">{company}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;