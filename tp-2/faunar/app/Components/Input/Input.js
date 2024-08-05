import React, { useState } from "react";
import { TextInput, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from "./Styles";

export default Input = props => {

    const [isFocused, setFocused] = useState(false);

    return (
        <View style={[styles.inputContainer, { borderColor: isFocused ? 'orange' : '#f9cfa6' }]}>
            <View style={styles.icon}>{<MaterialCommunityIcons name={props.leftIconName} size={30} color={isFocused ? 'orange' : '#f9cfa6'} />}</View>
            <TextInput
                style={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                selectionColor={'orange'}
                placeholder={props.placeholder}
            />
        </View>
    );
}