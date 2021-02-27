import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const Zmieniarka = ({ width }) => {
  const obrazek = isWidthUp('sm', width)
    ? './IMG/header_big.jpg'
    : './IMG/Title.jpg';

  return (
    <header>
      <img src={obrazek} alt="horizontal sky img" className="image__top" />
    </header>
  );
};

Zmieniarka.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};

export default withWidth()(Zmieniarka);
