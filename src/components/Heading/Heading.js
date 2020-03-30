import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: 'Baloo 2';
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (min-width: 968px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (min-width: 1268px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

export default Heading;
