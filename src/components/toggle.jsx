import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from './../actions/index';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { langCode } from './../constants';

const ToggleLanguage = ({ onLanguageChange, languages }) => {
  const handleAlignment = (event, newAlignment) => {
    onLanguageChange(newAlignment);
  };

  useEffect(() => {
    onLanguageChange(langCode.eng);
  }, []);
  // TODO: dodac useMemo

  return (
    <ToggleButtonGroup
      value={languages}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value={langCode.pl} aria-label="Polish">
        {langCode.pl}
      </ToggleButton>
      <ToggleButton value={langCode.eng} aria-label="English">
        {langCode.eng}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.currentLanguage
});

const mapDispatchToProps = (dispatch) => ({
  onLanguageChange: (language) => dispatch(changeLanguage(language))
});

ToggleLanguage.defaultProps = {
  languages: langCode.eng
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLanguage);
