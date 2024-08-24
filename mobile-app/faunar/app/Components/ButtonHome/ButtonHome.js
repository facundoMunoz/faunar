import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

export default ButtonHome = ({ isFocused, onPress, label}) => {

  return (
        <TouchableOpacity
              style={[
                styles.navbarButton,
                isFocused
                  ? {
                      borderBottomWidth: 3,
                      borderColor: 'orange',
                    }
                  : null,
              ]}
              onPress={onPress}
            >
              <Text
                style={[
                  styles.navbarButtonText,
                  {
                    color: isFocused ? 'white' : 'lightgray',
                    fontWeight: isFocused ? '500' : null,
                  },
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
  );
};

