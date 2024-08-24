import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

export default Card = ({ item, img }) => {
  const { cardImg: imgCard, detailsImg: imgDetails } = img;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Animal', {
          item,
          imgDetails,
        })
      }
    >
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image style={[styles.image]} source={imgCard} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.scientificName}>{item.scientificName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
