import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: white;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInnerWrapper = styled.div`
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  color: #38383b;
  margin: 7px auto;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #38383b;
  margin: 3px;
`;

const Footer = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledParagraph>
        <a
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dzikdrums"
        >
          <StyledIcon icon={faGithub} />
        </a>
        <a aria-label="E-mail" href="mailto:dzikdrums@gmail.com">
          <StyledIcon icon={faEnvelope} />
        </a>
      </StyledParagraph>
      <StyledParagraph>©2020 Maciej Dzik</StyledParagraph>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default Footer;
