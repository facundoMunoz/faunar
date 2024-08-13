import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 5,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        borderBottomWidth: 2
    },
    inputWithErrorContainer: {
        marginBottom: 30
    },
    input: {
        fontSize: 15,
        width: '100%'
    },
    icon: {
        paddingRight: 8
    }
});

export default styles;