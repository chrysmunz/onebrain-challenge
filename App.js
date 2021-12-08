
import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import Router from './src/router/Router';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  );
}

export default App;