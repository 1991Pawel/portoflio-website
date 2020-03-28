import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Baloo+2:700|Lato:300,400&display=swap'); */
  
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
`;

export default GlobalStyle;
