import React from 'react';
import { Provider } from 'react-redux';
import { MyAlbumStore } from '../domain';
import { Main } from './screens/Main';

export const initializePresentationLayer = (store: MyAlbumStore): React.FC => {
  return () => (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
