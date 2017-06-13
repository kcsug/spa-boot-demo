import { combineReducers } from 'redux';
import libraries from './Libraries/libraries.reducer';
import library from './Library/library.reducer';

export default combineReducers({ libraries, library });
