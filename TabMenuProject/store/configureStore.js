import { createStore, combineReducers } from 'redux';

import countReducer from '../reducers/countReducer.js'

const rootReducer = combineReducers(
    { count: countReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;