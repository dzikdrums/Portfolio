import {
  faAdobe,
  faCss3Alt,
  faEnvira,
  faGitAlt,
  faHtml5,
  faJira,
  faJs,
  faNode,
  faNpm,
  faPython,
  faReact,
  faReacteurope,
  faSass,
  faSlack,
  faYarn,
} from '@fortawesome/free-brands-svg-icons';

import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from 'components/common/Heading/Heading';
import React from 'react';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import gatsby from 'assets/skills/gatsby.png';
import gsap from 'assets/skills/gsap.svg';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 7vw 0;
  margin: 0 auto;

  ${media.desktop`
    width: 80%;
  `}
`;

const StyledSkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0 20px;
`;

const StyledSkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 10px auto;
  width: 49%;
  min-height: 120px;

  ${media.tablet`
    width: 33%;
  `};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 90px;

  ${media.desktop`
    font-size: 120px;
  `}
`;

const StyledSkillName = styled.span`
  margin: 10px 0;
`;

const StyledLogo = styled.img`
  width: 80px;
  height: 80px;

  ${media.desktop`
    width: 120px;
    height: 120px;  
  `}
`;

const StyledHeading = styled(Heading)`
  font-size: 1.4rem;
  padding: 8vw 0 0;
`;

const SkillsSection = () => (
  <StyledWrapper id="Skills">
    <Heading invert="true">Umiejętności</Heading>
    <StyledHeading invert="true">Front-end</StyledHeading>
    <Fade right>
      <StyledSkillsWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faHtml5} />
          <StyledSkillName>HTML</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faCss3Alt} />
          <StyledSkillName>CSS</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faSass} />
          <StyledSkillName>Sass</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faJs} />
          <StyledSkillName>JavaScript</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faThumbsUp} />
          <StyledSkillName>Styled Components</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faReact} />
          <StyledSkillName>React + Redux</StyledSkillName>
        </StyledSkillWrapper>
      </StyledSkillsWrapper>
    </Fade>
    <StyledHeading invert="true">Back-end</StyledHeading>
    <Fade left>
      <StyledSkillsWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faNode} />
          <StyledSkillName>Node.js - Express</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faEnvira} />
          <StyledSkillName>MongoDB</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faPython} />
          <StyledSkillName>Python</StyledSkillName>
        </StyledSkillWrapper>
      </StyledSkillsWrapper>
    </Fade>
    <StyledHeading invert="true">Narzędzia</StyledHeading>
    <Fade right>
      <StyledSkillsWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faGitAlt} />
          <StyledSkillName>Git</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faNpm} />
          <StyledSkillName>Npm</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faYarn} />
          <StyledSkillName>Yarn</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faJira} />
          <StyledSkillName>Jira</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faSlack} />
          <StyledSkillName>Slack</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faAdobe} />
          <StyledSkillName>Lightroom</StyledSkillName>
        </StyledSkillWrapper>
      </StyledSkillsWrapper>
    </Fade>
    <StyledHeading invert="true">Aktualnie uczę się</StyledHeading>
    <Fade left>
      <StyledSkillsWrapper>
        <StyledSkillWrapper>
          <StyledFontAwesomeIcon icon={faReacteurope} />
          <StyledSkillName>React Native</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledLogo src={gatsby} />
          <StyledSkillName>Gatsby</StyledSkillName>
        </StyledSkillWrapper>
        <StyledSkillWrapper>
          <StyledLogo src={gsap} />
          <StyledSkillName>GSAP</StyledSkillName>
        </StyledSkillWrapper>
      </StyledSkillsWrapper>
    </Fade>
  </StyledWrapper>
);

export default SkillsSection;
