import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../Components/GlobalStyles/GlobalStyles';

export default Animal = ({ route }) => {

  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{item.name}</Text>
    </View>
  );
}
