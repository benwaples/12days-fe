import { createStore, compose } from 'redux';
import reducers from './reducers';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(reducers, composeEnhancers());
