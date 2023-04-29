import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333333',
    position: 'absolute',
  width: 146,
  height: 46,
  left: 119,
  top: 597,
  borderRadius: 8
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;