import AboutSection from 'components/sections/AboutSection';
import IntroSection from 'components/sections/IntroSection';
import ProjectsSection from 'components/sections/ProjectsSection';
import React from 'react';
import SkillsSection from 'components/sections/SkillsSection';
import SomethingSection from 'components/sections/SomethingSection';

const HomePage = () => (
  <>
    <IntroSection />
    <AboutSection />
    <SkillsSection />
    <SomethingSection />
    <ProjectsSection />
  </>
);

export default HomePage;
