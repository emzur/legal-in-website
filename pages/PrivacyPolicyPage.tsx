import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next'; // Import useTranslation and Trans
import PageTitle from '../components/PageTitle.tsx';
import { Link } from 'react-router-dom';

const privacyPageHeroImageUrl = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1920&auto=format&fit=crop';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.privacyPolicy') + ' - Legal In';
  }, [t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('privacyPolicyPage.title')}
        subtitle={t('privacyPolicyPage.subtitle')}
        imageUrl={privacyPageHeroImageUrl}
      />

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto text-darktext">
            <p className="text-center text-xl mb-12">{t('privacyPolicyPage.disclaimer')}</p>

            <h2>{t('privacyPolicyPage.section1Title')}</h2>
            <p>{t('privacyPolicyPage.section1Text1')}</p>
            <p>{t('privacyPolicyPage.section1Text2')}</p>

            <h2>{t('privacyPolicyPage.section2Title')}</h2>
            <p>{t('privacyPolicyPage.section2Text1')}</p>
            <ul>
              <li>{t('privacyPolicyPage.section2ListItem1')}</li>
              <li>{t('privacyPolicyPage.section2ListItem2')}</li>
              <li>{t('privacyPolicyPage.section2ListItem3')}</li>
              <li>{t('privacyPolicyPage.section2ListItem4')}</li>
            </ul>
            <p>{t('privacyPolicyPage.section2Text2')}</p>

            <h2>{t('privacyPolicyPage.section3Title')}</h2>
            <p>{t('privacyPolicyPage.section3Text1')}</p>
            <ul>
              <li>{t('privacyPolicyPage.section3ListItem1')}</li>
              <li>{t('privacyPolicyPage.section3ListItem2')}</li>
              <li>{t('privacyPolicyPage.section3ListItem3')}</li>
              <li>{t('privacyPolicyPage.section3ListItem4')}</li>
            </ul>

            <h2>{t('privacyPolicyPage.section4Title')}</h2>
            <p>{t('privacyPolicyPage.section4Text1')}</p>
            <ul>
                <li><Trans i18nKey="privacyPolicyPage.section4ListItem1" /></li>
                <li><Trans i18nKey="privacyPolicyPage.section4ListItem2" /></li>
                <li><Trans i18nKey="privacyPolicyPage.section4ListItem3" /></li>
            </ul>
            
            <h2>{t('privacyPolicyPage.section5Title')}</h2>
            <p>{t('privacyPolicyPage.section5Text1')}</p>
            <p>{t('privacyPolicyPage.section5Text2')}</p>

            <h2>{t('privacyPolicyPage.section6Title')}</h2>
            <p>{t('privacyPolicyPage.section6Text1')}</p>
            <p>{t('privacyPolicyPage.section6Text2')}</p>

            <h2>{t('privacyPolicyPage.section7Title')}</h2>
            <p>{t('privacyPolicyPage.section7Text1')}</p>
            
            <h2>{t('privacyPolicyPage.section8Title')}</h2>
            <p>{t('privacyPolicyPage.section8Text1')}</p>
            <p>{t('privacyPolicyPage.section8Text2')}</p>

            <h2>{t('privacyPolicyPage.section9Title')}</h2>
            <p>{t('privacyPolicyPage.section9Text1')}</p>
            
            <h2>{t('privacyPolicyPage.section10Title')}</h2>
            <p>{t('privacyPolicyPage.section10Text1')}</p>

            <p className="mt-12 text-center">
              <Link 
                to="/kontakt"
                className="text-primary hover:text-neutraldark font-semibold"
              >
                {t('privacyPolicyPage.backToContact')}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;