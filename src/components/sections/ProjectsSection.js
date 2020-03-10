import Heading from 'components/common/Heading/Heading';
import Project from 'components/features/Project/Project';
import React from 'react';
import { data } from 'data';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 50px 10vw;
`;

const StyledProjectsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const ProjectsSection = () => (
  <StyledWrapper id="Projects">
    <Heading invert="true">Moje Projekty</Heading>
    <StyledProjectsWrapper>
      {data.map(function(props) {
        return <Project key={props.id} {...props} />;
      })}
    </StyledProjectsWrapper>
  </StyledWrapper>
);

export default ProjectsSection;
