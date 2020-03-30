import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading/Heading';
import Subheading from '../components/Heading/SubHeading';

const ProjectPageTemplatWrapper = styled.section`
  border: 5px solid red;
`;

const HeadingWrapper = styled.div`
  border: 5px solid red;
`;

const ProjectListWrapper = styled.ul`
  border: 5px solid red;
`;

const ProjectPageTemplate = () => (
  <ProjectPageTemplatWrapper>
    <HeadingWrapper>
      <Subheading>recent project</Subheading>
      <Heading>Project</Heading>
    </HeadingWrapper>
    <ProjectListWrapper>Project</ProjectListWrapper>
  </ProjectPageTemplatWrapper>
);

export default ProjectPageTemplate;
