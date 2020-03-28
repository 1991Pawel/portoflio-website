import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarItemWrapper = styled.li`
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

const listLink = [
  { name: 'start', path: '/', exact: true },
  { name: 'skills', path: '/skills' },
  { name: 'project', path: '/project' },
  { name: 'contact', path: '/contact' },
];

const NavbarItem = () => {
  const menu = listLink.map(({ name, path, exact }) => (
    <NavbarItemWrapper key={name}>
      <StyledLink exact={exact} to={path}>
        {name}
      </StyledLink>
    </NavbarItemWrapper>
  ));

  return <>{menu}</>;
};

export default NavbarItem;
