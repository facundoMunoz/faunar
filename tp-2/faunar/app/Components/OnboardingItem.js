import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native"

export default OnboardingItem = ({ item }) => {
    const { height, width } = useWindowDimensions();
    let color;

    if (item.id % 2 == 0) {
        color = '#0f0';
    } else {
        color = '#ff0';
    }

    return (
        <View style={[styles.container, { height, width }, { backgroundColor: color }]}>
            <View style={[styles.container]}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});