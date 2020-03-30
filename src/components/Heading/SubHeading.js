import React from 'react';
import styled from 'styled-components';

const StyledSubheading = styled.h3`
  font-family: 'Baloo 2';
  margin-bottom: -0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.primary};

  @media (min-width: 968px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (min-width: 1268px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

// eslint-disable-next-line react/prop-types
const SubHeading = ({ children }) => <StyledSubheading>{children}</StyledSubheading>;

export default SubHeading;
