import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import labelsENG from '../assets/labelsENG';

const ToggleLanguage = ({ selectLanguage, language }) => {
  const handleAlignment = (event, newAlignment) => {
    selectLanguage(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="PL" aria-label="Polish">
        {labelsENG.pl}
      </ToggleButton>
      <ToggleButton value="ENG" aria-label="English">
        {labelsENG.eng}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleLanguage;
