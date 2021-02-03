import React, { useEffect, useState } from 'react';

import './assets/styles.scss';
import Header from './components/header';
import TopNavbar from './components/Navbar';
import Contact from './containers/Contact';
import AboutMe from './containers/Home';

const App = () => {
  const [language, setLanguage] = useState('ENG');
  // const [load, setLoad] = useState(false);
  const languageSelector = (languageCode) => {
    setLanguage(languageCode);
  };
  useEffect((languageCode) => {
    languageSelector(languageCode);
  }, []);

  // const languageSelector = (languageCode) => {
  //   language === languageCode
  //     ? console.log('Sukces')
  //     : setLanguage(languageCode);
  //   console.log('language: ', language, 'languageCode: ', languageCode);
  // };

  return (
    <div>
      <TopNavbar languageSelector={languageSelector} />
      <Header />
      <AboutMe language={language} />
      <Contact language={language} />
    </div>
  );
};

export default App;
