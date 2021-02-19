import { SET_LANGUAGE } from './../actions/actionTypes';
const initialState = {
  language: 'eng'
};

const languages = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.language
      };
    }
    default:
      return state;
  }
};

export default languages;
