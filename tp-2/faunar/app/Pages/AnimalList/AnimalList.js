import { StyleSheet, View, Text } from 'react-native';

export default AnimalList = () => {
  return (
    <View style={styles.container}>
      <Text>Animals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tittle: {
    fontSize: 30,
  }
});
