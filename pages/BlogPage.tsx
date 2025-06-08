import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import PageTitle from '../components/PageTitle.tsx';
import { Link } from 'react-router-dom';
import { BlogPostKeys } from '../types.ts'; // Use BlogPostKeys type
import { MOCK_BLOG_POSTS_KEYS } from '../constants.ts'; // Use _KEYS version
import { ArrowRightIcon } from '../components/IconComponents.tsx';

const blogPageHeroImageUrl = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1920&auto=format&fit=crop';

const BlogPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.blog') + ' - Legal In';
  }, [t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('blogPage.title')}
        subtitle={t('blogPage.subtitle')}
        imageUrl={blogPageHeroImageUrl}
      />

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {MOCK_BLOG_POSTS_KEYS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {MOCK_BLOG_POSTS_KEYS.map((postKey: BlogPostKeys) => (
                <article key={postKey.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:shadow-xl transition-shadow duration-300">
                  <Link to={postKey.link} id={`blog-post-image-link-${postKey.id}`} className="block">
                    <img src={postKey.imageUrl} alt={t(postKey.titleKey)} className="w-full h-52 object-cover" loading="lazy"/>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-3">
                      <Link to={postKey.link} id={`blog-post-title-${postKey.id}`} className="hover:text-neutraldark transition-colors">{t(postKey.titleKey)}</Link>
                    </h3>
                    <div className="text-xs text-mediumtext mb-4">
                      <span>{t(postKey.dateKey)}</span> | <span>{t('blogPage.authorPrefix')}: {t(postKey.authorKey)}</span>
                    </div>
                    <p className="text-darktext text-sm mb-5 flex-grow leading-relaxed">{t(postKey.summaryKey)}</p>
                    <Link 
                      to={postKey.link} 
                      id={`blog-post-cta-${postKey.id}`}
                      className="mt-auto inline-flex items-center text-primary hover:text-neutraldark font-medium group"
                    >
                      {t('blogPage.readMore')}
                      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
             <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">{t('blogPage.noPosts.title')}</h2>
                <p className="text-lg text-darktext">{t('blogPage.noPosts.text')}</p>
                <img src="https://picsum.photos/seed/blog-soon/300/200?grayscale" alt={t('blogPage.noPosts.title')} className="mx-auto mt-8 rounded-lg shadow-md" loading="lazy" />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('blogPage.finalCta.title')}</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('blogPage.finalCta.text')}
            </p>
            <Link
                to="/kontakt"
                id="blog-contact-cta"
                className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all"
            >
                {t('blogPage.finalCta.ctaButton')}
            </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;