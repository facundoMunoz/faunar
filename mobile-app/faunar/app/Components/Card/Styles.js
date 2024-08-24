import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 15,
    marginBottom: 25,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: -500, height: 20 },
  },
  imageContainer: {
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
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  name: {
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
