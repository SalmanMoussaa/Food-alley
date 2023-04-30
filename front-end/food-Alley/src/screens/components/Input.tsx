
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import {  Button, StyleSheet, View } from "react-native";


type Props = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeHolder:string
    secureTextEntry:boolean
  };
  
  const Input: React.FC<Props> = ({ label, value, placeHolder ,onChangeText ,secureTextEntry }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = React.useState("");
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
  
    return (
      <View style={styles.container}>
        <TextInput
          label={label}
          value={value}
          placeholder={placeHolder}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          left={<TextInput.Icon name="email" />}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: 352,
      marginVertical: 12,
    },
    input: {
      backgroundColor: '#D9D9D9',
    },
  });
export default Input;