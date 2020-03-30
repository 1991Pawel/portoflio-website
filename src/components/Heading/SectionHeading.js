import React from 'react';
import styled from 'styled-components';

const StyledSectionHeading = styled.h4`
  text-transform: uppercase;
  font-family: 'Lato';
  margin-bottom: -0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.dark};
`;

// eslint-disable-next-line react/prop-types
const SectionHeading = ({ children }) => <StyledSectionHeading>{children}</StyledSectionHeading>;

export default SectionHeading;
