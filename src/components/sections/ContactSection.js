import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paragraph from 'components/common/Paragraph/Paragraph';
import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    min-height: 66vh;
  `}
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: #38383b;
  text-align: center;
  margin: 0 auto;
`;

const StyledIconWrapper = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  max-width: 750px;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const StyledContactWrapper = styled.div`
  margin: 5px auto;
`;
const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ContactSection = () => (
  <StyledWrapper id="Contact">
    <Fade>
      <StyledIconWrapper>
        <StyledContactWrapper>
          <StyledLink target="_blank" rel="noopener noreferrer" href="/">
            <StyledFontAwesome icon={faFilePdf} />
            <Paragraph>Curriculum Vitae</Paragraph>
          </StyledLink>
        </StyledContactWrapper>
        <StyledContactWrapper>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            aria-label="E-mail"
            href="mailto:dzikdrums@gmail.com"
          >
            <StyledFontAwesome icon={faEnvelope} />
            <Paragraph>dzikdrums@gmail.com</Paragraph>
          </StyledLink>
        </StyledContactWrapper>
        <StyledContactWrapper>
          <StyledLink target="_blank" rel="noopener noreferrer" href="https://github.com/dzikdrums">
            <StyledFontAwesome icon={faGithub} />
            <Paragraph>github.com/dzikdrums</Paragraph>
          </StyledLink>
        </StyledContactWrapper>
      </StyledIconWrapper>
    </Fade>
  </StyledWrapper>
);

export default ContactSection;
