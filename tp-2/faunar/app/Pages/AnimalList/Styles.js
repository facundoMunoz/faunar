import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  card: {
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: -500, height: 20 }, //intente tocar la sombra pero no salio
  },
  imageContainer: {
    position: 'relative',
    width: '100%', 
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  scientificName: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#fff',
    marginTop: 2,
  },
});

export default styles;
