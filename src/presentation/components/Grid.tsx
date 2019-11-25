import React from 'react';
import LottieView from 'lottie-react-native';
import { Text, FlatList, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { Photo } from '../../domain/entities/photo';
import { styles } from './grid.styles';

interface Props {
  data: Photo[];
  isLoading: boolean;
}

export function Grid(props: Props): React.ReactElement {
  const { data, isLoading } = props;
  const renderItem = ({ item }: { item: Photo }) => (
    <View style={styles.item}>
      <Image style={styles.image} uri={item.url} preview={1500} />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
    </View>
  );

  if (isLoading) {
    return (
      <LottieView
        source={require('../../../assets/loading-animation')}
        autoPlay
        autoSize
      />
    );
  }

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      bounces={false}
      numColumns={2}
    />
  );
}
