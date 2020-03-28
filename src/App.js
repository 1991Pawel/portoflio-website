import React from 'react';
import GlobalStyle from './theme/GlobalStyles';
import HomePageTemplate from './templates/HomePageTemplate';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <HomePageTemplate />
    </div>
  );
};

export default App;
