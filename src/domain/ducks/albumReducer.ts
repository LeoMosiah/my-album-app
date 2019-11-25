import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import { Photo } from '../entities/photo';
import { MyAlbumState } from '../index';

export type AlbumActionsType =
  | PayloadAction<Photo[]>
  | PayloadAction<boolean>
  | PayloadAction<string>;

interface AlertType {
  showAlert: boolean;
  message: string;
}

export interface AlbumState {
  photos: Photo[];
  alert: AlertType;
  isLoading: boolean;
}

export const NO_ALERTS: AlertType = { showAlert: false, message: '' };

export const ALBUM_INITIAL_STATE: AlbumState = {
  photos: [],
  alert: NO_ALERTS,
  isLoading: false,
};

export const albumSelector = (state: MyAlbumState): AlbumState => state.album;

export const setLoading = createAction<boolean>('duck/album/setLoading');
export const updatePhotos = createAction<Photo[]>('duck/album/updateUser');
export const showAlert = createAction<string>('duck/album/showAlert');

export function handleSetLoading(
  state: AlbumState,
  action: PayloadAction<boolean>,
): AlbumState {
  return {
    ...state,
    isLoading: action.payload,
  };
}

export function handleUpdatePhotos(
  state: AlbumState,
  action: PayloadAction<Photo[]>,
): AlbumState {
  return {
    ...state,
    photos: action.payload,
  };
}

export function handleShowAlert(
  state: AlbumState,
  action: PayloadAction<string>,
): AlbumState {
  return {
    ...state,
    alert: {
      showAlert: true,
      message: action.payload,
    },
  };
}

export const albumReducer: Reducer<
  AlbumState,
  AlbumActionsType
> = createReducer(ALBUM_INITIAL_STATE, {
  [updatePhotos.type]: handleUpdatePhotos,
  [showAlert.type]: handleShowAlert,
  [setLoading.type]: handleSetLoading,
});
