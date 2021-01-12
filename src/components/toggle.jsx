import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const ToggleLanguage = () => {
  const [alignment, setAlignment] = useState('ENG');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
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
