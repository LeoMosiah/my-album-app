import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { App } from './src/presentation';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
