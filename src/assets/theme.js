import { createMuiTheme } from '@material-ui/core/styles';

const font = "'Lato', sans-serif";

export const themeLight = createMuiTheme({
  typography: {
    fontFamily: font
  },

  palette: {
    primary: {
      main: '#ffbee0'
    },
    secondary: {
      main: '#4e4e4e'
    }
  }
});

export const themeDark = createMuiTheme({
  typography: {
    fontFamily: font
  },

  palette: {
    primary: {
      main: '#40fffc'
    },
    secondary: {
      main: '#570000'
    }
  }
});
