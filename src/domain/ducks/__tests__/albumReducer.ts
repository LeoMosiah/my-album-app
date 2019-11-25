import { initializeDomainLayer } from '../../index';
import { Photo } from '../../entities/photo';
import { updatePhotos, showAlert } from '../albumReducer';

describe('Photos Reducer', () => {
  let store = initializeDomainLayer();

  beforeEach(() => {
    store = initializeDomainLayer();
  });

  it('should update album photos', () => {
    const photo = new Photo('id', 'albumId', 'title', 'url', 'thumbnailUrl');
    const expectedState = {
      photos: [photo],
      alert: {
        showAlert: false,
        message: '',
      },
      isLoading: false,
    };
    store.dispatch(updatePhotos([photo]));
    expect(store.getState().album).toEqual(expectedState);
  });

  it('should show an error message when failed to fetch goes wrong', () => {
    const expectedState = {
      showAlert: true,
      message: 'Photos not found',
    };
    store.dispatch(showAlert('Photos not found'));
    expect(store.getState().album.alert).toEqual(expectedState);
  });
});
