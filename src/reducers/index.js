import { combineReducers } from 'redux';
import languages from './languages';
import themes from './themes';

const rootReducer = combineReducers({
  languages,
  themes
});

export default rootReducer;
