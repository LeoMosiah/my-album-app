import { all, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchPhotos, fetchPhotosSaga } from "./albumSagas";

export function* rootSaga(): SagaIterator {
  yield all([
    takeLatest(fetchPhotos, fetchPhotosSaga),
  ]);
}
