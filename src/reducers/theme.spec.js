import { SET_THEME } from '../actions/actionTypes';
import { themeDark, themeLight } from '../assets/theme';
import { themeNames } from '../constants';
import themes from './themes';

describe('theme reducer', () => {
  it('should handle initial state', () => {
    expect(themes(undefined, {})).toEqual({
      currentTheme: 'themeDark',
      themeMode: themeDark
    });
  });

  it('should handle SET_THEME', () => {
    const result = themeDark;

    expect(
      themes([], {
        type: SET_THEME,
        payload: result
      })
    ).toEqual({
      currentTheme: result,
      themeMode: result === themeNames.light ? themeLight : themeDark
    });
  });
});
