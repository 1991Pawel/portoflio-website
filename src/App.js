import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyles';
import HomePageTemplate from './templates/HomePageTemplate';
import Header from './components/Header/Header';

const Skills = () => <p>skills page</p>;
const Project = () => <p>Project page</p>;
const Contact = () => <p>Contact page</p>;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Route exact path="/" component={HomePageTemplate} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
};

export default App;
