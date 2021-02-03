import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const Zmieniarka = ({ width }) => {
  if (isWidthUp('sm', width)) {
    return (
      <header>
        <img
          src="./IMG/header_placeholder.jpg"
          alt="horizontal sky img"
          className="image__top"
        />
      </header>
    );
  }

  return (
    <header>
      <img
        src="./IMG/Title.jpg"
        alt="horizontal sky img"
        className="image__top"
      />
    </header>
  );
};

Zmieniarka.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};

export default withWidth()(Zmieniarka);
