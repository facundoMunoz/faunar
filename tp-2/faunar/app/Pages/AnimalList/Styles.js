import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        width: "100%",
        marginTop: StatusBar.currentHeight
    },
    cardContainer: {
        width: '100%',
        height: 250,
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor: 'lavender',  
        overflow: 'hidden',
      },
      image: {
        width: '100%',
        height: '80%', 
      },
      textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'darkorange',
        fontSize: 17,
        letterSpacing: 0.75,
      },
});

export default styles;