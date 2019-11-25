import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { initializePresentationLayer } from './presentation';
import { initializeDataLayer } from './data';
import { initializeDomainLayer } from './domain';

if (__DEV__) {
  activateKeepAwake();
}

initializeDataLayer();
const store = initializeDomainLayer();
const App = initializePresentationLayer(store);

registerRootComponent(App);
