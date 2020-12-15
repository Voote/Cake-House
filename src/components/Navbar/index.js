import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import AboutMe from './../../containers/Home/index';
import Contact from './../../containers/Contact/index';

const TopNavbar = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="offer" href="offer" disabled />
        <Tab label="home" href="home" />
        <Tab label="contact" href="contact" />
      </Tabs>
      <AboutMe id="home" />
      <Contact id="contact" />
    </div>
  );
};

export default TopNavbar;
