import { View, Text, useWindowDimensions } from 'react-native';
import styles from './Styles';

export default OnboardingItem = (items) => {
  const { item } = items;
  const characteristic = item[Object.keys(item)[0]];
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{characteristic}</Text>
    </View>
  );
};
