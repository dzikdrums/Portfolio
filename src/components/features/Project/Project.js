import Button from 'components/common/Button/Button';
import { Fade } from 'react-reveal';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledProjectWrapper = styled.div`
  padding: 5vw 3vw;
  margin: 30px 0;

  ${media.tablet`
    width: 80%;
    margin: 0 auto;
  `}

  ${media.desktop`
    width: 49%;
  `}
`;

const StyledImage = styled.img`
  color: white;
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const StyledProjectTitle = styled.h4`
  color: white;
  font-size: 1.3rem;
  line-height: 1.3;
  margin: 1.2rem 0;
  font-weight: 500;
`;

const StyledProjectDescription = styled.p`
  color: white;
  margin: 1rem 0;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const StyledTechDescription = styled.p`
  letter-spacing: 1px;
`;

const StyledButtonWrapper = styled.div`
  padding: 5vw 0;
  margin: 0 auto;
  width: 90%;
  max-width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Project = ({ img, name, desc, code, demo, tech }) => (
  <StyledProjectWrapper>
    <Fade>
      <StyledImage src={img} />
      <StyledProjectTitle>{name}</StyledProjectTitle>
      <StyledProjectDescription>{desc}</StyledProjectDescription>
      <StyledTechDescription>{tech}</StyledTechDescription>
      <StyledButtonWrapper>
        <Button as="a" target="_blank" rel="noopener noreferrer" href={demo}>
          DEMO
        </Button>
        <Button as="a" target="_blank" rel="noopener noreferrer" href={code}>
          KOD
        </Button>
      </StyledButtonWrapper>
    </Fade>
  </StyledProjectWrapper>
);

export default Project;
