import { put, call } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { getPhotos } from '../../data/services/photos';
import { setLoading, showAlert, updatePhotos } from '../ducks/albumReducer';
import { Photo } from '../entities/Photo';

export const fetchPhotos: PayloadActionCreator<void> = createAction(
  'saga/album/fetchPhotos',
);

type PhotoResponse = {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export function* fetchPhotosSaga(): SagaIterator {
  try {
    yield put(setLoading(true));
    const response = yield call(getPhotos);
    const photos = response.map(
      ({ id, albumId, title, url, thumbnailUrl }: PhotoResponse) =>
        new Photo(id, albumId, title, url, thumbnailUrl),
    );
    yield put(updatePhotos(photos));
  } catch (e) {
    yield put(showAlert(e.message));
  } finally {
    yield put(setLoading(false));
  }
}
