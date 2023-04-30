import React, { useState } from 'react';
import { Image, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import MyButton from "../components/Button";
import MyLink from "../components/Link";
import Button from "../components/Button";


interface SigninProps {
  style?: StyleProp<ViewStyle>;
}


const Signin: React.FC<SigninProps> = ({ style }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
    
  const navigation = useNavigation();
  

  return (
    <View style={[styles.container, style]}>


      <View style={[styles.form]}>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Input
        label="password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your email"
        secureTextEntry={true}
      />
      <Input
        label="Re-enter password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your email"
        secureTextEntry={true}
      />
       <MyLink
          title="Register instead"
          onPress={() => navigation.navigate()}
        />
      </View>
      <View style={styles.buttons}>
        <MyButton title="Sign in" onPress={() => navigation.navigate()} />
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
  },
  heading: {
    width: 260,
    height: 30,
    marginBottom: 40,
    marginTop: 20,
  },
  form: {
    marginBottom: 20,
    flexDirection: "column",
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttons: {
    
    width: 260,
  
    alignSelf: "center",

  },
  
});

export default Signin;