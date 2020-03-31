import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Lato';
  }

  section {
    margin-top:5rem;
    padding:1rem 1rem;
    @media (min-width: 768px) {
      margin:2rem 8rem;
  }
  @media (min-width: 968px) {
      margin:3rem 12rem;
  }
  @media (min-width: 1068px) {
      margin:5rem 20rem;
  }
  }
  header {
    padding:1rem 0;

    @media (min-width: 768px) {
      margin:0rem 8rem;
  }
  @media (min-width: 968px) {
      margin:0rem 12rem;
      padding:2rem 0;
  }
  @media (min-width: 1068px) {
      margin:0rem 15rem;
  }
  @media (min-width: 1268px) {
      margin:0rem 20rem;
  }
  
  }
`;

export default GlobalStyle;
