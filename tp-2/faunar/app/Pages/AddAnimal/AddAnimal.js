import { StyleSheet, View, Text } from 'react-native';

export default AddAnimal = () => {
  return (
    <View style={styles.container}>
      <Text>Add animal</Text>
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
