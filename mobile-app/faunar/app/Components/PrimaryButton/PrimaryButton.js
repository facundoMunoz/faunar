import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles';

export default PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      title={title}
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.saveAnimalButton}
    >
      <Text style={styles.saveAnimalButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
