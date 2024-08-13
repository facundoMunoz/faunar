import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
    },
    uploadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default styles;