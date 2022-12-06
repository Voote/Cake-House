import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { changeLanguage } from '../actions';
import { langCode } from '../constants';

const ToggleLanguage = ({ onLanguageChange, languages }) => {
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment != null) {
      onLanguageChange(newAlignment);
    }
  };

  const getOnLangChange = useMemo(() => {
    onLanguageChange(langCode.eng);
  }, [onLanguageChange]);
  useEffect(() => getOnLangChange, [getOnLangChange]);

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
