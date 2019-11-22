import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ReducersMapObject } from 'redux';
import {
  PhotosActionsType,
  photosReducer,
  PhotosState
} from './ducks/photosReducer';
import { rootSaga } from './sagas';

export interface MyPhotosState {
  readonly album: PhotosState
}

export type MyPhotosActions = PhotosActionsType

export type MyPhotosStorage = EnhancedStore<MyPhotosState, MyPhotosActions>;

const rootReducer: ReducersMapObject<MyPhotosState, MyPhotosActions> = {
  album: photosReducer,
};

export const initializeDomainLayer = (): MyPhotosStorage => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;

}
