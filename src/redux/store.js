import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

const enhancers = [];

if(process.env.NODE_ENV === 'development') {
    enhancers.push(reduxDevtools());
}

const middlewares = [
    applyMiddleware(thunk)
];

const composedEnhancers = compose(
    ...middlewares,
    ...enhancers
);

const store = createStore(
    rootReducer,
    composedEnhancers
);

export default store;

