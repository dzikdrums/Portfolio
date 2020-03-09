import Button from 'components/common/Button/Button';
import { Link } from 'react-scroll';
import MaciejDzik from 'assets/main.jpg';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: white;
  width: 100%;
  padding: 0 0 5vw;
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 6vw;

  ${media.tablet`
    flex-direction: row;
    padding: 0 3vw;
  `};
`;

const StyledImageWrapper = styled.div`
  color: white;
  width: 100%;
  padding: 4vmax 0 1vmax;

  ${media.tablet`
    width: 49%;
  `};
`;

const StyledImage = styled.img`
  object-fit: contain;
  width: 90%;
  height: auto;
`;

const StyledMainDescription = styled.h1`
  font-size: 2.3rem;
  line-height: 1.3;
  font-weight: 500;
  width: 90%;

  ${media.tablet`
    font-size: 4rem;
  `};
`;

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: 4%;

  ${media.tablet`
    font-size: 1.5rem;
  `};
`;

const StyledButtonWrapper = styled.div`
  padding: 6vw 0;

  ${media.tablet`
    padding: 3vw 0 1vw;
  `};
`;

const StyledText = styled.div`
  padding: 1vmax 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    width: 49%;
  `};
`;

const IntroSection = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledImageWrapper>
        <StyledImage src={MaciejDzik} />
      </StyledImageWrapper>
      <StyledText>
        <StyledMainDescription>
          I'am a front-end developer wannabe from Kraków.
        </StyledMainDescription>
        <StyledParagraph>Check out my latest projects.</StyledParagraph>
        <StyledButtonWrapper>
          <Button as={Link} smooth={true} duration={1000} to="Projects">
            Check Now
          </Button>
        </StyledButtonWrapper>
      </StyledText>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default IntroSection;
