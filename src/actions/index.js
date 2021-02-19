import { SET_LANGUAGE } from './actionTypes';

export const changeLanguage = (language) => {
  return function (dispatch) {
    dispatch({
      type: SET_LANGUAGE,
      payload: language
    });
  };
};
