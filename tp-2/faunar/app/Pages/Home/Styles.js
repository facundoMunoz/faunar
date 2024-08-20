import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  imageBackgroundContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.6)',
    paddingTop: 20,
  },
  welcomeTextContainer: {
    paddingTop: 10,
    paddingLeft: 25,
  },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 45,
    borderBottomWidth: 0.2,
    borderColor: 'lightgray',
    paddingBottom: 0.5,
  },
  paragraphContainer: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  faunarTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
  },
  navbarButton: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarButtonText: {
    fontSize: 17,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    textAlign: 'justify',
    textAlignVertical: 'center',
    lineHeight: 25,
  },
  icon: {
    paddingRight: 10,
  },
});

export default styles;
