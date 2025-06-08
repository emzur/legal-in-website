import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'; // Import useTranslation and Trans
import PageTitle from '../components/PageTitle.tsx';
import { TeamMemberKeys } from '../types.ts'; // Use TeamMemberKeys
import { UsersIcon, LightBulbIcon, ShieldCheckIcon } from '../components/IconComponents.tsx';

// Data uses keys now, will be translated in the component
const teamMembersKeys: TeamMemberKeys[] = [
  { id: '1', nameKey: 'aboutPage.teamSection.member1Name', roleKey: 'aboutPage.teamSection.member1Role', imageUrl: 'https://picsum.photos/seed/katarzyna/300/300?grayscale', bioKey: 'aboutPage.teamSection.member1Bio' },
  { id: '2', nameKey: 'aboutPage.teamSection.member2Name', roleKey: 'aboutPage.teamSection.member2Role', imageUrl: 'https://picsum.photos/seed/ewa/300/300?grayscale', bioKey: 'aboutPage.teamSection.member2Bio' },
  { id: '3', nameKey: 'aboutPage.teamSection.member3Name', roleKey: 'aboutPage.teamSection.member3Role', imageUrl: 'https://picsum.photos/seed/anna/300/300?grayscale', bioKey: 'aboutPage.teamSection.member3Bio' },
];

const aboutPageHeroImageUrl = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop';


const AboutPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  
  useEffect(() => {
    document.title = t('nav.about') + ' - Legal In';
  }, [t]);

  return (
    <div className="bg-white">
      <PageTitle 
        title={t('aboutPage.title')} 
        subtitle={t('aboutPage.subtitle')} 
        imageUrl={aboutPageHeroImageUrl} 
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-darktext">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('aboutPage.missionSection.title')}</h2>
              <p className="leading-relaxed mb-4">
                {t('aboutPage.missionSection.intro')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <LightBulbIcon className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span><Trans i18nKey="aboutPage.missionSection.value1" components={{ strong: <strong /> }} /></span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span><Trans i18nKey="aboutPage.missionSection.value2" components={{ strong: <strong /> }} /></span>
                </li>
                <li className="flex items-start">
                  <UsersIcon className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span><Trans i18nKey="aboutPage.missionSection.value3" components={{ strong: <strong /> }} /></span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/public/assets/owner.jpeg" alt={t('aboutPage.teamSection.title')} className="rounded-lg shadow-xl object-cover object-top w-full max-w-md h-auto aspect-[4/5]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">{t('aboutPage.teamSection.title')}</h2>
          <p className="text-lg text-darktext text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            {t('aboutPage.teamSection.intro')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembersKeys.map(member => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:shadow-xl transition-shadow duration-300">
                <img src={member.imageUrl} alt={t(member.nameKey)} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary" loading="lazy" />
                <h3 className="text-2xl font-semibold text-primary mb-1">{t(member.nameKey)}</h3>
                <p className="text-primary font-medium mb-3">{t(member.roleKey)}</p>
                {member.bioKey && <p className="text-sm text-mediumtext leading-relaxed">{t(member.bioKey)}</p>}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:order-last">
              <img src="https://picsum.photos/seed/history/500/450?grayscale" alt={t('logo')} className="rounded-lg shadow-xl object-cover w-full max-w-md h-auto aspect-[4/3]" loading="lazy" />
            </div>
            <div className="prose prose-lg max-w-none text-darktext md:order-first">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('aboutPage.historySection.title')}</h2>
              <p className="leading-relaxed mb-4">
                 <Trans i18nKey="aboutPage.historySection.text1" components={{ strong: <strong /> }} />
              </p>
              <p className="leading-relaxed mb-6">
                {t('aboutPage.historySection.text2')}
              </p>
              <Link 
                to="/kontakt" 
                id="about-contact-cta"
                className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg shadow-md hover:shadow-lg transition-all"
              >
                {t('aboutPage.historySection.ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;