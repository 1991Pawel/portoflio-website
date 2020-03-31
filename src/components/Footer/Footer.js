import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.primary};
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

export default StyledFooter;
