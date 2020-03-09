import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 6vw;

  ${media.tablet`
    padding: 6vw 6vw 3vw;
  `};

  ${media.desktop`
    padding: 3vw 3vw 3vw;
  `};
`;

const StyledHeader = styled.header`
  color: white;
`;

const StyledTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.4em;
  font-style: normal;
  letter-spacing: 0em;

  ${media.tablet`
    font-size: 2rem;
  `};
`;

const Header = () => (
  <StyledWrapper>
    <StyledHeader>
      <StyledTitle>Maciej Dzik</StyledTitle>
    </StyledHeader>
  </StyledWrapper>
);

export default Header;
