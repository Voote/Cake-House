import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

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
        <Tab label="offer" disabled />
        <Tab label="home" />
        <Tab label="contact" />
      </Tabs>
    </div>
  );
};

export default TopNavbar;
