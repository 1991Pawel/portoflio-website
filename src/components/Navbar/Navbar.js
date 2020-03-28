import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';

const NavbarWrapper = styled.nav``;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarItem />
    </NavbarWrapper>
  );
};

export default Navbar;
