import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const DarkThemeToggle = () => {
  const [toggleState, setToggleState] = useState(true);
  const handleChange = () => {
    setToggleState(!toggleState);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            className="component__toggle"
            checked={toggleState}
            onChange={handleChange}
          />
        }
      />
    </FormGroup>
  );
};

export default DarkThemeToggle;
