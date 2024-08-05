import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 30,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '90%',
        borderBottomWidth: 2
    },
    input: {
        fontSize: 15,
        height: '100%',
        width: '100%'
    },
    icon: {
        paddingRight: 8
    }
});

export default styles;