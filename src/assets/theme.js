import { createMuiTheme } from '@material-ui/core/styles';

const font = "'Lato', sans-serif";

export const theme = createMuiTheme({
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
