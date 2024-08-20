import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 45,
    borderBottomWidth: 0.2,
    borderColor: 'lightgray',
    paddingBottom: 0.5,
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
});

export default styles;
