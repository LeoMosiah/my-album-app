import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 6,
  },
  image: {
    height: Dimensions.get('window').width / 2.2,
    width: Dimensions.get('window').width / 2.2,
    borderRadius: 5,
  },
  title: {
    width: Dimensions.get('window').width / 2.2,
    textAlign: 'center',
  },
});
