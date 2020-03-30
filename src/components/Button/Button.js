import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 45px;
  background: transparent;
  color: ${({ theme }) => theme.dark};
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.primary};
`;

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => <StyledButton type="button">{children}</StyledButton>;

export default Button;
