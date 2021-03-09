import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './@redux/configureStore';

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

