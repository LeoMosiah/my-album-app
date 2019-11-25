import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../domain/sagas/albumSagas';
import { SafeAreaView } from 'react-native';
import { Grid } from '../components/Grid';
import { styles } from './main.styles';
import { albumSelector } from '../../domain/ducks/albumReducer';

export function Main(): React.ReactElement {
  const dispatch = useDispatch();
  const { photos, isLoading } = useSelector(albumSelector);
  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Grid data={photos} isLoading={isLoading} />
    </SafeAreaView>
  );
}
