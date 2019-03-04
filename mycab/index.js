/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import navigation from './app/config/navigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => navigation);

