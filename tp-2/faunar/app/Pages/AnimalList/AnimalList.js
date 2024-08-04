import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Components/GlobalStyles/GlobalStyles';

export default AnimalList = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Animal")}
        style={{
          backgroundColor: "orange",
          width: "50%"
        }}
      >
        <Text style={{ fontSize: 15 }}>Animal</Text>
      </TouchableOpacity>
    </View>
  );
}
