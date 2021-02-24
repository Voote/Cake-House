import { SET_LANGUAGE, SET_THEME } from './actionTypes';

export const changeLanguage = (language) => {
  return function (dispatch) {
    dispatch({
      type: SET_LANGUAGE,
      payload: language
    });
  };
};

export const changeTheme = (theme) => {
  return function (dispatch) {
    dispatch({
      type: SET_THEME,
      payload: theme
    });
  };
};
