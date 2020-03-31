import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Heading from '../components/Heading/Heading';
import Subheading from '../components/Heading/SubHeading';
import Project from '../components/Project/Project';
import { Transition, Variants } from '../animation/Transition';

const ProjectPageTemplatWrapper = styled.section`
  margin-top: 5rem;
  @media (min-width: 968px) {
    margin-top: 10rem;
  }
`;

const HeadingWrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProjectPageTemplate = () => (
  <motion.div initial="out" animate="in" exit="out" variants={Variants} transition={Transition}>
    <ProjectPageTemplatWrapper>
      <HeadingWrapper>
        <Subheading>recent project</Subheading>
        <Heading>Project</Heading>
      </HeadingWrapper>
      <Project />
    </ProjectPageTemplatWrapper>
  </motion.div>
);

export default ProjectPageTemplate;
