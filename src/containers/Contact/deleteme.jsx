import React from 'react';
import Fab from '@material-ui/core/Fab';
import { AddIcon, NavigationIcon } from '@material-ui/icons';

const FloatingActionButtons = () => (
  <div styles={{ margin: '1rem' }}>
    <Fab color="primary" disabled aria-label="add">
      <AddIcon />
    </Fab>
    <Fab variant="extended">
      <NavigationIcon styles={{ marginRight: '1rem' }} />
      Navigate
    </Fab>
  </div>
);

export default FloatingActionButtons;
