import * as React from 'react';
import { TextInput } from 'react-native-paper';
interface Props {
    value: string;
    label:string;
    onchangeText:string;
  }
const Input : React.FC<Props> = ({ value , label , onchangeText }) =>{
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={text => setText(onchangeText)}
    />
  );
};

export default Input;