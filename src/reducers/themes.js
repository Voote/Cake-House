import { SET_THEME } from '../actions/actionTypes';
import { themeDark, themeLight } from '../assets/theme';
import { themeType } from '../constants';

const initialState = {
  currentTheme: 'themeLight',
  color: themeLight
};

const themes = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        currentTheme: action.payload,
        color: action.payload === themeType.light ? themeLight : themeDark
      };
    }
    default:
      return state;
  }
};

export default themes;
