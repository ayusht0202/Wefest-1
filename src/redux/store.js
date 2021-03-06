import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers/rootReducers';
import {persistStore} from 'redux-persist';

const initialState = {};

const middleware = [thunk];
export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export const persistor = persistStore(store);
