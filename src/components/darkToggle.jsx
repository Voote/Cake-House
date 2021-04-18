import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../actions';
import { themeNames } from '../constants';

import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';

const DarkThemeToggle = ({ onThemeChange }) => {
  const [toggleState, setToggleState] = useState(false);
  const handleChange = () => {
    setToggleState(!toggleState);
    toggleState === true
      ? onThemeChange(themeNames.dark)
      : onThemeChange(themeNames.light);
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

const mapStateToProps = (state) => ({
  themes: state.themes.currentTheme
});

const mapDispatchToProps = (dispatch) => ({
  onThemeChange: (theme) => dispatch(changeTheme(theme))
});

DarkThemeToggle.defaultProps = {
  themes: themeNames.light
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkThemeToggle);
