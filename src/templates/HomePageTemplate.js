import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomePageSvg } from '../components/Svg/Svg';
import Heading from '../components/Heading/Heading';
import SubHeading from '../components/Heading/SubHeading';
import { Transition, Variants } from '../animation/Transition';

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
      transform-origin: 50%;
    }
    50% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
      transform-origin: 50%;
    }
  `;

const HomePageTemplateWrapper = styled.section`
  margin-top: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 9;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 968px) {
    margin-top: 10rem;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 3rem;
  height: auto;
  width: 300px;
  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 968px) {
    width: 400px;
  }
  @media (min-width: 1068px) {
    width: 700px;
  }
  @media (min-width: 1268px) {
    width: 900px;
  }
  @media (min-width: 1468px) {
    width: 1000px;
  }

  svg {
    height: auto;
    width: 100%;
    #Path_168 {
      animation: ${rotation} 3s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite both;
      fill: #dde4f9;
    }
  }
`;

const HeadingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    align-items: start;
  }
`;
const ButtonHeadingWrapper = styled.div`
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 8px 45px;
  background: transparent;
  color: ${({ theme }) => theme.dark};
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: underline;
  }
`;

const HomePageTemplate = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={Variants} transition={Transition}>
      <HomePageTemplateWrapper>
        <HeadingContentWrapper>
          <SubHeading>i am learning to become</SubHeading>
          <Heading>Front-end-developer.</Heading>
          <ButtonHeadingWrapper>
            <StyledLink to="Project">Projects</StyledLink>
          </ButtonHeadingWrapper>
        </HeadingContentWrapper>
        <ImageWrapper>
          <HomePageSvg alt="image with desktop" />
        </ImageWrapper>
      </HomePageTemplateWrapper>
    </motion.div>
  );
};

export default HomePageTemplate;
