import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarItemWrapper = styled.li`
  list-style: none;
`;

const NavbarListWrapper = styled.ul`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 1rem;
  color: palevioletred;
  display: inline-block;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.dark};

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: ${({ theme }) => theme.primary};
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (min-width: 968px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const listLink = [
  { name: 'start', path: '/', exact: true },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
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
  return <NavbarListWrapper>{menu}</NavbarListWrapper>;
};

export default NavbarItem;
