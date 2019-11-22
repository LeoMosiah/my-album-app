import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import { Photo } from '../entities/photo';
import {MyPhotosState} from "../index";

export type PhotosActionsType =
  | PayloadAction<Photo[]>
  | PayloadAction<boolean>
  | PayloadAction<string>;

interface AlertType {
  showAlert: boolean;
  message: string;
}

export interface PhotosState {
  photos: Photo[];
  alert: AlertType;
  isLoading: boolean;
}

export const NO_ALERTS: AlertType = { showAlert: false, message: '' };

export const PHOTOS_INITIAL_STATE: PhotosState = {
  photos: [],
  alert: NO_ALERTS,
  isLoading: false,
};

export const albumSelector = (state: MyPhotosState): PhotosState => state.album

export const setLoading = createAction<boolean>('duck/photos/setLoading');
export const updatePhotos = createAction<Photo[]>('duck/photos/updateUser');
export const showAlert = createAction<string>('duck/photos/showAlert');

export function handleSetLoading(
  state: PhotosState,
  action: PayloadAction<boolean>,
): PhotosState {
  return {
    ...state,
    isLoading: action.payload,
  };
}

export function handleUpdatePhotos(
  state: PhotosState,
  action: PayloadAction<Photo[]>,
): PhotosState {
  return {
    ...state,
    photos: action.payload,
  };
}

export function handleShowAlert(
  state: PhotosState,
  action: PayloadAction<string>,
): PhotosState {
  return {
    ...state,
    alert: {
      showAlert: true,
      message: action.payload,
    },
  };
}

export const photosReducer: Reducer<
  PhotosState,
  PhotosActionsType
  > = createReducer(PHOTOS_INITIAL_STATE, {
  [updatePhotos.type]: handleUpdatePhotos,
  [showAlert.type]: handleShowAlert,
  [setLoading.type]: handleSetLoading,
});
