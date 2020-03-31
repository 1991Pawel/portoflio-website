import React from 'react';
import styled from 'styled-components';
import LiveIcon from '../../assets/desktop-icon.svg';
import GitIcon from '../../assets/github.icon.svg';
import StyledLink from '../StyledLink/StyledLink';

const ProjectListItem = styled.li`
  position: relative;
  width: 80%;
  margin: 2rem auto;
  min-height: 130px;
  margin-bottom: 10rem;

  background: ${({ theme }) => theme.primary};
  list-style: none;
  @media (min-width: 568px) {
    width: 48%;
  }
  @media (min-width: 1268px) {
    width: 30%;
  }
  @media (min-width: 1268px) {
    width: 24%;
  }
`;
const ProjectTitle = styled.h4`
  font-weight: normal;
  text-transform: capitalize;
  color: #fff;
  font-size: 1.5rem;
  margin-left: 20px;
  line-height: 25px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DescriptionWrapper = styled.div`
  padding: 1rem 2rem;
  background: #fff;
  position: absolute;
  top: 25px;
  right: 0;
  min-height: 180px;
  left: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const DescriptionContent = styled.p`
  text-transform: capitalize;
  font-weight: 300;
`;

const DescriptionHeading = styled.h4`
  font-weight: 400;
  margin: 3rem 0 0.5rem;
  color: ${({ theme }) => theme.dark};
`;
const ProjectList = ({ repo }) =>
  repo.map(({ id, name, homepage, description, html_url: gitLink }) => (
    <ProjectListItem key={id}>
      <ProjectTitle>{name}</ProjectTitle>
      <DescriptionWrapper>
        <LinkWrapper>
          {homepage && (
            <StyledLink rel="noopener noreferrer" target="_blank" href={homepage}>
              Live
              <img src={LiveIcon} alt="live icon" />
            </StyledLink>
          )}
          <StyledLink rel="noopener noreferrer" target="_blank" href={gitLink}>
            Github
            <img src={GitIcon} alt="live icon" />
          </StyledLink>
        </LinkWrapper>
        <DescriptionHeading>Description:</DescriptionHeading>
        <DescriptionContent>{description || 'No description :('}</DescriptionContent>
      </DescriptionWrapper>
    </ProjectListItem>
  ));
export default ProjectList;
