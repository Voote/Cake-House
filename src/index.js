import React from 'react';
import { render } from 'react-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDark, themeLight } from './assets/theme';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';

import App from './App';

// const store = createStore(rootReducer);

render(
  // <Provider store={store}>
  <MuiThemeProvider theme={themeLight}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  // </Provider>,
  document.getElementById('root')
);
