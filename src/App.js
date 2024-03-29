import React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './assets/styles.scss';
import Header from './components/header';
import TopNavbar from './components/navbar';
import Contact from './containers/Contact';
import AboutMe from './containers/Home';
import Signature from './containers/Contact/signature';

const App = ({ themes }) => (
  <MuiThemeProvider theme={themes}>
    <CssBaseline />
    <div>
      <TopNavbar />
      <Header />
      <AboutMe />
      <Contact />
      <Signature />
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = (state) => ({
  themes: state.themes.themeMode
});

export default connect(mapStateToProps)(App);
