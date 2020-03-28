import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyles';
import HomePageTemplate from './templates/HomePageTemplate';

const App = () => {
  return (
    <Router>
      <Switch>
        <GlobalStyle />
        <HomePageTemplate />
      </Switch>
    </Router>
  );
};

export default App;
