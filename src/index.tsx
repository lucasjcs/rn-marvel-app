import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import store from './store';

import Routes from './navigation/Routes';

Icon.loadFont();
Feather.loadFont();

const App: React.FC = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <Routes />
  </Provider>
);
export default App;
