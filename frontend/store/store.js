import { createStore } from 'redux';
import combinedReducers from '../reducers/index.js';

const configureStore = () => {
  return createStore(combinedReducers);
};

export default configureStore;
