import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading/Heading';
import Subheading from '../components/Heading/SubHeading';
import Project from '../components/Project/Project';

const ProjectPageTemplatWrapper = styled.section`
  margin-top: 10rem;
`;

const HeadingWrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProjectPageTemplate = () => (
  <ProjectPageTemplatWrapper>
    <HeadingWrapper>
      <Subheading>recent project</Subheading>
      <Heading>Project</Heading>
    </HeadingWrapper>
    <Project />
  </ProjectPageTemplatWrapper>
);

export default ProjectPageTemplate;
