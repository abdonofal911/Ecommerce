/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import {COLORS, SHADOWS, SIZES} from './assets/constants/theme';

export {COLORS, SHADOWS, SIZES};
