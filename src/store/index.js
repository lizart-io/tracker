/**
 * Store
*/
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export const store = createStore(
    reducers, {},
    // https://redux.js.org/usage/configuring-your-store 
    // compose with dev tools is used for showing your state 
    composeWithDevTools(applyMiddleware(thunk)));