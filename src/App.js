import React from 'react';
import { connect } from 'react-redux';

import './assets/styles.scss';
import Header from './components/header';
import TopNavbar from './components/Navbar';
import Contact from './containers/Contact';
import AboutMe from './containers/Home';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = ({ themes }) => (
  <MuiThemeProvider theme={themes}>
    <CssBaseline />
    <div>
      <TopNavbar />
      <Header />
      <AboutMe />
      <Contact />
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = (state) => ({
  themes: state.themes.color
});

export default connect(mapStateToProps)(App);
