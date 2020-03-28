import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarItemWrapper = styled.li`
  border: 2px solid blue;
`;

const NavbarItem = () => {
  return (
    <>
      <NavbarItemWrapper>
        <NavLink to="/HomePageTemplate">About</NavLink>
      </NavbarItemWrapper>
    </>
  );
};

export default NavbarItem;
