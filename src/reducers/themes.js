import { SET_LANGUAGE } from './../actions/actionTypes';
import { langCode } from '../constants';
import labelsENG from '../assets/labelsENG';
import labelsPL from '../assets/labelsPL';

const initialState = {
  currentLanguage: 'eng', //toggelek nazwa light/dark
  dictionary: labelsENG //zaciagamy theme konkretny
};

const themes = (state = initialState, action) => {
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

export default themes;
