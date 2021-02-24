import { SET_LANGUAGE } from '../actions/actionTypes';
import labelsENG from '../assets/labelsENG';
import labelsPL from '../assets/labelsPL';
import { langCode } from '../constants';

const initialState = {
  currentLanguage: 'eng',
  dictionary: labelsENG
};

const languages = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        currentLanguage: action.payload,
        dictionary: action.payload === langCode.eng ? labelsENG : labelsPL
      };
    }
    default:
      return state;
  }
};

export default languages;
