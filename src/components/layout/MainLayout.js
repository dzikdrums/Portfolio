import React, { useState } from 'react';

import Footer from 'components/features/Footer/Footer';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/features/Header/Header';
import MobileNavigation from 'components/features/MobileNavigation/MobileNavigation';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainLayout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <>
      <GlobalStyle overflow={isMenuOpen} />
      <StyledWrapper>
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <MobileNavigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {children}
        <Footer />
      </StyledWrapper>
    </>
  );
};

export default MainLayout;
