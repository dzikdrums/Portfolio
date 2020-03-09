import Footer from 'components/features/Footer/Footer';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/features/Header/Header';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  </>
);

export default MainLayout;
