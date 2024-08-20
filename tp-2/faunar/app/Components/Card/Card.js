import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

export default Card = ({ item, img }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Animal', {
          item,
          img,
        })
      }
    >
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image style={[styles.image]} source={img} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.scientificName}>{item.scientificName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

/*
<View style={styles.titleContainer}>
  <Text style={styles.title}>{item.name}</Text>
  <Text style={styles.scientificName}>{item.scientificName}</Text>
</View>;
*/
