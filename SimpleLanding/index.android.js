import React from 'react';
import { AppRegistry } from 'react-native';

console.disableYellowBox = true; // disable warning regarding componentWillMount ; it is deprecated and will be removed in the next major version

import App from './app/components/App/'; // for monorepo
AppRegistry.registerComponent('SimpleLanding', () => App);
