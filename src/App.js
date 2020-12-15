import React from 'react';
import './assets/styles.scss';
import Header from './components/header';
import TopNavbar from './components/Navbar';
import Contact from './containers/Contact';
import AboutMe from './containers/Home';

const App = () => (
  <div>
    <Header />
    <TopNavbar />
    {/* <AboutMe id="home" />
    <Contact id="contact" /> */}
  </div>
);

export default App;
