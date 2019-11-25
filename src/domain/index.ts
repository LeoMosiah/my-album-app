import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ReducersMapObject } from 'redux';
import {
  AlbumActionsType,
  albumReducer,
  AlbumState,
} from './ducks/albumReducer';
import { rootSaga } from './sagas';

export interface MyAlbumState {
  readonly album: AlbumState;
}

export type MyAlbumActions = AlbumActionsType;

export type MyAlbumStore = EnhancedStore<MyAlbumState, MyAlbumActions>;

const rootReducer: ReducersMapObject<MyAlbumState, MyAlbumActions> = {
  album: albumReducer,
};

export const initializeDomainLayer = (): MyAlbumStore => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
