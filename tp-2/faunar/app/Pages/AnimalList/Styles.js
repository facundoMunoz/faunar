import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        width: "100%",
        marginTop: StatusBar.currentHeight
    }
});

export default styles;