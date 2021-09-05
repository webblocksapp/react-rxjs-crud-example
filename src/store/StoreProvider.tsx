import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { useCustomerReducer } from '../reducers';

const StoreProvider: React.FC = ({ children }) => {
  const { reducer: customerState } = useCustomerReducer();

  const store = createStore(combineReducers({ customerState }));

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
