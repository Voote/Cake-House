import React from 'react';
import { connect } from 'react-redux';

import './assets/styles.scss';
import Header from './components/header';
import TopNavbar from './components/Navbar';
import Contact from './containers/Contact';
import AboutMe from './containers/Home';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDark, themeLight } from './assets/theme';

const App = ({ languages }) => (
  <MuiThemeProvider theme={themeLight}>
    <CssBaseline />
    <div>
      <TopNavbar language={languages} />
      <Header />
      <AboutMe />
      <Contact />
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = (state) => ({
  languages: state.languages.currentLanguage
});

export default connect(mapStateToProps)(App);
