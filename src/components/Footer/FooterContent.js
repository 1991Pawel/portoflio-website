import React from 'react';
import styled from 'styled-components';
import emailIcon from '../../assets/emailicon.svg';
import gitIcon from '../../assets/github.icon.svg';
import mobile from '../../assets/mobilephone.svg';
import StyledLink from '../StyledLink/StyledLink';

const FooterContentWrapper = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const StyledContactListWrapper = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 968px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const StyledContactItem = styled.li`
  list-style: none;
  padding: 1rem;

  img {
    height: 20px;
    width: 20px;
  }
`;

const FooterContent = () => (
  <FooterContentWrapper>
    <StyledContactListWrapper>
      <StyledContactItem>
        <StyledLink secondary href="mailto: lesnik.pawel1991@gmail.com">
          <img src={emailIcon} alt="live icon" />
          lesnik.pawel1991@gmail.com
        </StyledLink>
      </StyledContactItem>
      <StyledContactItem>
        <StyledLink secondary href="tel:504761685">
          <img src={mobile} alt="live icon" />
          504761685
        </StyledLink>
      </StyledContactItem>
      <StyledContactItem>
        <StyledLink
          secondary
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/1991Pawel"
        >
          <img src={gitIcon} alt="live icon" />
          Github
        </StyledLink>
      </StyledContactItem>
    </StyledContactListWrapper>
  </FooterContentWrapper>
);

export default FooterContent;
