import Button from 'components/common/Button/Button';
import { Fade } from 'react-reveal';
import Proptypes from 'prop-types';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledProjectWrapper = styled.div`
  padding: 3vw 1vw;
  margin: 30px auto;

  ${media.tablet`
    width: 80%;
    margin: 0 auto;
  `}

  ${media.desktop`
    width: 49%;
    height: 600px;
  `}

  &:hover {
    .image {
      opacity: 0.2;
      filter: grayscale(0.8);
    }

    .button__wrapper {
      opacity: 1;
    }
  }
`;

const StyledImage = styled.img`
  color: white;
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
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
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 25%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const StyledImageWrapper = styled.div`
  color: black;
  position: relative;
`;

const Project = ({ img, name, desc, code, demo, tech }) => (
  <StyledProjectWrapper>
    <Fade>
      <StyledImageWrapper>
        <StyledImage className="image" src={img} />
        <StyledButtonWrapper className="button__wrapper">
          <Button as="a" target="_blank" rel="noopener noreferrer" href={demo}>
            DEMO
          </Button>
          <Button as="a" target="_blank" rel="noopener noreferrer" href={code}>
            KOD
          </Button>
        </StyledButtonWrapper>
      </StyledImageWrapper>
      <StyledProjectTitle>{name}</StyledProjectTitle>
      <StyledProjectDescription>{desc}</StyledProjectDescription>
      <StyledTechDescription>{tech}</StyledTechDescription>
    </Fade>
  </StyledProjectWrapper>
);

Project.propTypes = {
  img: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  desc: Proptypes.string.isRequired,
  tech: Proptypes.string.isRequired,
  demo: Proptypes.string.isRequired,
  code: Proptypes.string.isRequired,
};

export default Project;
