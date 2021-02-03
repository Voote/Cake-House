import React, { useState } from 'react';

import './assets/styles.scss';
import Header from './components/header';
import TopNavbar from './components/Navbar';
import Contact from './containers/Contact';
import AboutMe from './containers/Home';

const App = () => {
  const [language, setLanguage] = useState('ENG');

  const languageSelector = (languageCode) => {
    setLanguage(languageCode || language);
  };

  return (
    <div>
      <TopNavbar languageSelector={languageSelector} language={language} />
      <Header />
      <AboutMe language={language} />
      <Contact language={language} />
    </div>
  );
};

export default App;
