import { StyleSheet, StatusBar } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  singleContainer: {
    marginTop: StatusBar.currentHeight
  }
});

export default globalStyles;