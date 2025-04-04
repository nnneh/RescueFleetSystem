'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './stores';
import { PersistGate } from 'redux-persist/integration/react';

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  console.log("ReduxProvider rendered"); //debugging line.

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;