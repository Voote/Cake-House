import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../actions';
import { themeType } from '../constants';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const DarkThemeToggle = ({ onThemeChange, themes }) => {
  const [toggleState, setToggleState] = useState(false);
  const handleChange = () => {
    setToggleState(!toggleState);
    toggleState !== true
      ? onThemeChange(themeType.dark)
      : onThemeChange(themeType.light);
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
  themes: themeType.light
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkThemeToggle);
