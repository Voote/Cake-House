import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { imgLocation } from '../constants';

const Header = ({ width }) => {
  const checkImgWidth = isWidthUp('sm', width)
    ? imgLocation.HeaderBig
    : imgLocation.header;

  return (
    <header>
      <img
        src={checkImgWidth}
        alt="horizontal sky img"
        className="image__top"
      />
    </header>
  );
};

Header.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};

export default withWidth()(Header);
