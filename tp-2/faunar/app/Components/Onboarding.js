import React from "react";
import { View, StyleSheet, FlatList } from "react-native"
import animalesOriginal from "../testing-storage/animales-original";
import OnboardingItem from "./OnboardingItem";

export default Onboarding = () => {
    return (
        <View style={styles.container}>
            <FlatList data={animalesOriginal} renderItem={({ item }) => <OnboardingItem item={item} />} pagingEnabled />
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