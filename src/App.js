import React from 'react';

import './assets/styles.scss';
import Header from './components/header';
import TopNavbar from './components/Navbar';
import Contact from './containers/Contact';
import AboutMe from './containers/Home';

const App = () => (
  <div>
    <TopNavbar />
    <Header />
    <AboutMe />
    <Contact />
  </div>
);

export default App;
