import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const configureStore = preloadedState =>
	createStore(reducer, preloadedState, applyMiddleware(thunkMiddleware));

export default configureStore;
