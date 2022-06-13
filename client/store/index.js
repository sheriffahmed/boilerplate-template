import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import initReducer from './init'

const rootReducer = combineReducers({
  init: initReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
    )
);
