import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
        PL
      </ToggleButton>
      <ToggleButton value="ENG" aria-label="English">
        ENG
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleLanguage;
