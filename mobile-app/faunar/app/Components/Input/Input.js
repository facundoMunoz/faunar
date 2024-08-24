import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from "./Styles";

export default Input = ({ onFocus = () => {}, ...props }) => {

    const [isFocused, setFocused] = useState(false);

    return (
        <View style={styles.inputWithErrorContainer}>
            <View style={[styles.inputContainer, { borderColor: props.error ? 'red' : isFocused ? 'orange' : '#f9cfa6' }]}>
                <View style={styles.icon}>{<MaterialCommunityIcons name={props.leftIconName} size={30} color={isFocused ? 'orange' : '#f9cfa6'} />}</View>
                <TextInput
                    style={styles.input}
                    onFocus={() => {onFocus(), setFocused(true)}}
                    onBlur={() => setFocused(false)}
                    selectionColor={'orange'}
                    placeholder={props.placeholder}
                    multiline={props.numLines > 1 ? true : false}
                    textAlignVertical={props.numLines > 1 ? "top" : "center"}
                    numberOfLines={props.numLines}
                    {...props}
                />
            </View>
            {props.error && <Text style={{ color: 'red' }}>{props.error}</Text>}
        </View>
    );
}