import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import theme from './theme/mainTheme';
import GlobalStyle from './theme/GlobalStyles';
import HomePageTemplate from './templates/HomePageTemplate';
import Header from './components/Header/Header';
import SkillsPageTemplate from './templates/SkillsPageTemplate';
import ProjectPageTemplate from './templates/ProjectPageTemplate';
import ContactPageTemplate from './templates/ContactPageTemplate';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={HomePageTemplate} />
            <Route exact path="/skills" component={SkillsPageTemplate} />
            <Route exact path="/projects" component={ProjectPageTemplate} />
            <Route exact path="/contact" component={ContactPageTemplate} />
          </Switch>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
};

export default App;
