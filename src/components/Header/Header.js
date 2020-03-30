import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Logo from './Logo';

const HeaderWrapper = styled.header`
  padding: 1rem 0;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
