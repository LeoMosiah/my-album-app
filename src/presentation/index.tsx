import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { initializeDomainLayer } from '../domain';
import { albumSelector } from '../domain/ducks/photosReducer';
import { fetchPhotos } from '../domain/sagas/albumSagas';
import { initializeDataLayer } from '../data';
import { Photo } from "../domain/entities/photo";

initializeDataLayer()

export function App(): React.ReactElement {
  return (
    <Provider store={initializeDomainLayer()}>
      <Main />
    </Provider>
  );
}

function Main(): React.ReactElement {
  const dispatch = useDispatch()
  const { photos } = useSelector(albumSelector)
  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])
  const renderItem = ({ item }: { item: Photo}) => <Text>{item.title}</Text>
  return (
    <SafeAreaView style={styles.container}>
      <FlatList keyExtractor={item => item.id.toString()} data={photos} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
