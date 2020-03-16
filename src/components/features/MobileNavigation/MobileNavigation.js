import styled, { css } from 'styled-components';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import React from 'react';
import { media } from 'utils';

const StyledWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  z-index: 9999;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #38383b;
  transition: visibility 600ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;

      ${media.tablet`
        visibility: hidden;
        opacity: 0;
      `}
    `}
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledNav = styled.nav`
  padding-top: 14vh;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-size: 7vmin;
  line-height: 1.8em;
  opacity: 0;
  display: block;
  text-align: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  transition: opacity 0.25s linear 0s;

  :hover {
    opacity: 0.5;
  }

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
`;

const MobileNavigation = ({ isMenuOpen, toggleMenu }) => {
  return (
    <StyledWrapper active={isMenuOpen}>
      <StyledInnerWrapper>
        <StyledNav>
          <StyledLink
            onClick={() => toggleMenu()}
            active={isMenuOpen || undefined}
            to="Intro"
            smooth
            duration={1000}
          >
            Intro
          </StyledLink>
          <StyledLink
            onClick={() => toggleMenu()}
            active={isMenuOpen || undefined}
            to="Projects"
            smooth
            duration={1000}
          >
            Projekty
          </StyledLink>
          <StyledLink
            onClick={() => toggleMenu()}
            active={isMenuOpen || undefined}
            to="About"
            smooth
            duration={1000}
          >
            O mnie
          </StyledLink>
          <StyledLink
            onClick={() => toggleMenu()}
            active={isMenuOpen || undefined}
            to="Skills"
            smooth
            duration={1000}
          >
            Umiejętności
          </StyledLink>
          <StyledLink
            onClick={() => toggleMenu()}
            active={isMenuOpen || undefined}
            to="Contact"
            smooth
            duration={1000}
          >
            Kontakt
          </StyledLink>
        </StyledNav>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

MobileNavigation.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileNavigation;
