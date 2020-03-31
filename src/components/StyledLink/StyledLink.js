import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: ${({ secondary }) => (secondary ? '0rem' : '1rem')};
  img {
    margin-left: ${({ secondary }) => (secondary ? '0rem' : '1rem')};
    margin-right: ${({ secondary }) => (secondary ? '1rem' : '0rem')};
    height: 20px;
    width: 20px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
