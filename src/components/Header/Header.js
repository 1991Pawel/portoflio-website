import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const HeaderWrapper = styled.header`
  background: #ccc;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <p>logo</p>
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
