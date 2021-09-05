import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useCustomerReducer } from '../reducers';

const StoreProvider: React.FC = ({ children }) => {
  const customerState = useCustomerReducer();

  const store = createStore(combineReducers({ customerState }), composeWithDevTools());

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
