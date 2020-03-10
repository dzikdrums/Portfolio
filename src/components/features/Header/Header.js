import Hamburger from 'components/common/Hamburger/Hamburger';
import { Link } from 'react-scroll';
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.4em;
  font-style: normal;
  letter-spacing: 0em;
  transition: font-size 1s ease-in-out;

  ${media.tablet`
    font-size: 2rem;
  `};
`;

const StyledNav = styled.nav`
  cursor: pointer;
  display: none;
  transition: display 1s ease-in-out;

  ${media.tablet`
    display: inline;
  `};
`;

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  line-height: 1.8em;
  margin: 0 10px;
`;

const StyledBurgerWrapper = styled.div`
  opacity: 1;

  ${media.tablet`
    opacity: 0;
  `}
`;

const Header = ({ isMenuOpen, toggleMenu }) => (
  <StyledWrapper>
    <StyledHeader>
      <StyledTitle>Maciej Dzik</StyledTitle>
      <StyledNav>
        <StyledLink to="Intro" smooth={true} duration={1000}>
          Intro
        </StyledLink>
        <StyledLink to="Projects" smooth={true} duration={1000}>
          Projekty
        </StyledLink>
        <StyledLink to="About" smooth={true} duration={1000}>
          O mnie
        </StyledLink>
        <StyledLink to="Skills" smooth={true} duration={1000}>
          Umiejętności
        </StyledLink>
        <StyledLink to="Contact" smooth={true} duration={1000}>
          Kontakt
        </StyledLink>
      </StyledNav>
      <StyledBurgerWrapper onClick={() => toggleMenu()}>
        <Hamburger active={isMenuOpen} />
      </StyledBurgerWrapper>
    </StyledHeader>
  </StyledWrapper>
);

export default Header;
