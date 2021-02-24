import { SET_THEME } from '../actions/actionTypes';
import { themeDark, themeLight } from '../assets/theme';
import { themeNames } from '../constants';

const initialState = {
  currentTheme: 'themeLight',
  themeMode: themeLight
};

const themes = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        currentTheme: action.payload,
        themeMode: action.payload === themeNames.light ? themeLight : themeDark
      };
    }
    default:
      return state;
  }
};

export default themes;
