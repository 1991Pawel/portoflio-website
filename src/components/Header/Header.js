import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #ccc;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <p>logo</p>
      <p>nav</p>
    </HeaderWrapper>
  );
};

export default Header;
