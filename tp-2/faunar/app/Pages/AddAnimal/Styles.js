import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        width: "100%",
        marginTop: StatusBar.currentHeight
    }
});

export default styles;