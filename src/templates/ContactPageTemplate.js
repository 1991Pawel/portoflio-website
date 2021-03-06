import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Heading from '../components/Heading/Heading';
import SubHeading from '../components/Heading/SubHeading';
import StyledFooter from '../components/Footer/Footer';
import FooterContent from '../components/Footer/FooterContent';
import { Transition, Variants } from '../animation/Transition';

const ContactPageTemplatWrapper = styled.section`
  position: relative;
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

const ContactPageTemplate = () => (
  <>
    <motion.div initial="out" animate="in" exit="out" variants={Variants} transition={Transition}>
      <ContactPageTemplatWrapper>
        <HeadingWrapper>
          <SubHeading>get in touch</SubHeading>
          <Heading>Contact</Heading>
        </HeadingWrapper>
        <StyledFooter>
          <FooterContent />
        </StyledFooter>
      </ContactPageTemplatWrapper>
    </motion.div>
  </>
);

export default ContactPageTemplate;
