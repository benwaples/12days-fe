import { createStore, compose } from 'redux';
import reducer from './reducers/authReducer';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(reducer, composeEnhancers());
