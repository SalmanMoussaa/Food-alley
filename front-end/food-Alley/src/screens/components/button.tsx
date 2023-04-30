import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle, StyleProp } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({ title, onPress, disabled = false , style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled}>
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