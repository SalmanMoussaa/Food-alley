import React, { useState } from 'react';
import { Image, View, StyleSheet, StyleProp, ViewStyle ,Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import MyButton from "../components/Button";
import MyLink from "../components/Link";
import SvgBottom from '../components/Svgbottom';




interface SigninProps {
  style?: StyleProp<ViewStyle>;
}


const Signin: React.FC<SigninProps> = ({ style }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [repassword, resetPassword] = useState('');
      
    
  const navigation = useNavigation();
  

  return (
    <View style={[styles.container, style]}>
        
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("C:/Users/abirm/OneDrive/Desktop/Food-Alley/front-end/food-Alley/assets/logo.png")}
        />
      </View>
      <Text style={styles.loginText}>Login</Text>
      {/* your login form inputs and submit button */}
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
        value={repassword}
        onChangeText={resetPassword}
        placeholder="Enter your email"
        secureTextEntry={true}
      />
       <MyLink
          title="Register instead"
          onPress={() => navigation.navigate()}
        />
         <View style={styles.buttons}>
    <MyButton title="Sign in" onPress={() => navigation.navigate()} />
       
      </View>
      </View>
      
        <Image source={require("C:/Users/abirm/OneDrive/Desktop/Food-Alley/front-end/food-Alley/assets/Rectangle.jpg") }style={styles.Image}/>
    
     
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
   // borderRadius: 20,
   // overflow: 'hidden',
  },
  buttons: {
    
    width: 260,
    alignSelf: "center",

  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    // add any other styles for your logo container
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode:'stretch',
    // add any other styles for your logo image
  },
  loginText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf:'center'
    // add any other styles for your login text
  },
  Image:{
    width: '100%',
    
    position: 'absolute',
    bottom: 0,
  }
  
});

export default Signin;