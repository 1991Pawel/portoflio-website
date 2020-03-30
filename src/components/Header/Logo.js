import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem;
  font-weight: ${({ theme }) => theme.bold};
`;

const Logo = () => {
  return <LogoWrapper>{`{Code}`}</LogoWrapper>;
};

export default Logo;
