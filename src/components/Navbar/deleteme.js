import React from 'react';
import { Button } from '@material-ui/core';
import AboutMe from './../../containers/Home/index';
import Contact from './../../containers/Contact/index';

const TopNavbar = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Button href="#">offer</Button>
        <Button href="#home">home</Button>
        <Button href="#contact">contact</Button>
      </div>
      <div id="home">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default TopNavbar;
