import AboutSection from 'components/sections/AboutSection';
import ContactSection from 'components/sections/ContactSection';
import HelloSection from 'components/sections/HelloSection';
import IntroSection from 'components/sections/IntroSection';
import ProjectsSection from 'components/sections/ProjectsSection';
import React from 'react';
import SkillsSection from 'components/sections/SkillsSection';

const HomePage = () => (
  <>
    <IntroSection />
    <HelloSection />
    <ProjectsSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </>
);

export default HomePage;
