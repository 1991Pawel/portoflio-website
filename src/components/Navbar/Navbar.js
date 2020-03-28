import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';

const NavbarWrapper = styled.nav`
  border: 2px solid red;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarItem />
      <NavbarItem />
      <NavbarItem />
      <NavbarItem />
      <NavbarItem />
    </NavbarWrapper>
  );
};

export default Navbar;
