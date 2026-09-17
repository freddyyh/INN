import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from '../styles/stil';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}