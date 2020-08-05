import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter';
import { loginReducer } from './login';

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer
})

export const store = createStore(rootReducer);
