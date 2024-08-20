import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 0.5,
  },
  animalContainer: {
    flex: 0.5,
  },
  animalInfoContainer: {
    flex: 1,
    marginTop: 15,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'center',
  },
  backgroundGradient: {
    flex: 1,
    backgroundColor: 'orange',
  },
  animalHeader: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  animalNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  animalScientificNameText: {
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
    marginBottom: 5,
  },
  inExtinctionText: {
    fontSize: 17,
    fontWeight: '300',
    color: 'lightgray',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    lineHeight: 20,
    marginBottom: 5,
  },
});

export default styles;
