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
      // style={{ color: 'grey' }}
    >
      <ToggleButton value="ENG" aria-label="English">
        ENG
      </ToggleButton>
      <ToggleButton value="PL" aria-label="Polish">
        PL
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleLanguage;
