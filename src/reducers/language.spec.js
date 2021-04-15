import { SET_LANGUAGE } from '../actions/actionTypes';
import { langCode } from '../constants';
import labelsENG from '../assets/labelsENG';
import labelsPL from '../assets/labelsPL';
import languages from './languages';

describe('language reducer', () => {
  it('should handle initial state', () => {
    expect(languages(undefined, {})).toEqual({
      currentLanguage: 'eng',
      dictionary: labelsENG
    });
  });

  it('should handle SET_LANGUAGE', () => {
    const result = labelsPL;

    expect(
      languages([], {
        type: SET_LANGUAGE,
        payload: result
      })
    ).toEqual({
      currentLanguage: result,
      dictionary: result === langCode.eng ? labelsENG : labelsPL
    });
  });
});
