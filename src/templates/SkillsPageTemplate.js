import React from 'react';
import styled from 'styled-components';
import { SkillsPageSvg } from '../components/Svg/Svg';
import Heading from '../components/Heading/Heading';
import Subheading from '../components/Heading/SubHeading';
import SectionHeading from '../components/Heading/SectionHeading';

const SkillsPageTemplateWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  @media (min-width: 968px) {
    margin-top: 10rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  width: 300px;
  margin-top: 3rem;
  @media (min-width: 968px) {
    max-width: 200px;
  }
  @media (min-width: 1068px) {
    max-width: 300px;
  }
`;
const ListWrapper = styled.ul`
  margin-bottom: 2rem;
  list-style: none;
`;
const ListItem = styled.li`
  padding: 1rem;
`;

const ListPoint = styled.p`
  margin-left: 18px;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -18px;
    background: ${({ theme }) => theme.primary};
    height: 3px;
    width: 10px;
    transform: translateY(50%);
  }
`;

const ImageWrapper = styled.div`
  height: auto;
  width: 300px;
  @media (min-width: 968px) {
    order: 2;
    width: 40%;
    align-self: center;
  }

  svg {
    height: auto;
    width: 100%;
  }
`;

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 968px) {
    width: 55%;
  }
  @media (min-width: 1200px) {
    width: 45%;
  }
`;

const SkillsPageTemplate = () => (
  <SkillsPageTemplateWrapper>
    <ImageWrapper>{SkillsPageSvg}</ImageWrapper>
    <Container>
      <ContentWrapper>
        <Subheading>Development</Subheading>
        <Heading>Skills</Heading>
        <ListWrapper>
          <ListItem>
            <SectionHeading>Html</SectionHeading>
          </ListItem>
          <ListWrapper>
            <ListItem>
              <ListPoint>Semantic HTML5</ListPoint>
            </ListItem>
          </ListWrapper>
        </ListWrapper>
        <ListWrapper>
          <ListItem>
            <SectionHeading>Css</SectionHeading>
          </ListItem>
          <ListWrapper>
            <ListItem>
              <ListPoint>Flexbox CSS-grid SASS</ListPoint>
            </ListItem>
          </ListWrapper>
        </ListWrapper>
        <ListWrapper>
          <ListItem>
            <SectionHeading>Js</SectionHeading>
          </ListItem>
          <ListWrapper>
            <ListItem>
              <ListPoint>ES6+ features DOM manipulations</ListPoint>
            </ListItem>
            <ListItem>
              <ListPoint>Local storage API</ListPoint>
            </ListItem>
          </ListWrapper>
        </ListWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <Subheading>Familiar with</Subheading>
        <Heading>Basic</Heading>
        <ListWrapper>
          <ListItem>
            <SectionHeading>Git</SectionHeading>
          </ListItem>
          <ListWrapper>
            <ListItem>
              <ListPoint>GitHub</ListPoint>
            </ListItem>
          </ListWrapper>
        </ListWrapper>
        <ListWrapper>
          <ListItem>
            <SectionHeading>React</SectionHeading>
          </ListItem>
          <ListWrapper>
            <ListItem>
              <ListPoint>Context State</ListPoint>
            </ListItem>
            <ListItem>
              <ListPoint>Css in JS</ListPoint>
            </ListItem>
            <ListItem>
              <ListPoint>Redux</ListPoint>
            </ListItem>
          </ListWrapper>
        </ListWrapper>
      </ContentWrapper>
    </Container>
  </SkillsPageTemplateWrapper>
);

export default SkillsPageTemplate;
