import * as React from 'react';
import { TextInput } from 'react-native-paper';
interface Props {
    txt: string;
    label:string;
  }
const Input : React.FC<Props> = ({ txt  }) =>{
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label={txt}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default Input;