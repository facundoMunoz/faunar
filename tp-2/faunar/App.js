import { StyleSheet, StatusBar, View } from 'react-native';
import Onboarding from './app/Components/Onboarding';

export default App = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
  tittle: {
    fontSize: 30,
  }
});
