import React, { useState } from 'react';
import { Image, View, StyleSheet, StyleProp, ViewStyle ,Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import MyButton from "../components/Button";
import MyLink from "../components/Link";
import SvgBottom from '../components/Svgbottom';
import Kitchenscomponent from '../components/Kitchenscomponent';




interface registerProps {
  style?: StyleProp<ViewStyle>;
}


const register: React.FC<registerProps> = ({ style }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [repassword, resetPassword] = useState('');
      
    
  const navigation = useNavigation();
  

  return (
    <View style={[styles.container, style]}>
        
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("C:/Users/abirm/OneDrive/Desktop/Food-Alley/front-end/food-Alley/assets/arrow.png")}
        />
      
      <Text style={styles.loginText}>create account</Text>
      {/* your login form inputs and submit button */}
      </View>
      <View style={[styles.form]}>
      <Input
        label="username"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Input
        label="Fiste Name"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Input
        label="Last Name"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Input
        label="Phone Number"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
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
    
       
       

         
      </View>
      
    {/*<Image source={require("C:/Users/abirm/OneDrive/Desktop/Food-Alley/front-end/food-Alley/assets/Rectangle.jpg") }style={styles.Image}/>
    */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
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
    position:'relative',
   // borderRadius: 20,
   // overflow: 'hidden',
  },
  buttons: {
    backgroundColor: '#333333',
    position: 'absolute',
  width: 146,
  height: 46,
  left: 119,
  top: 597,
  borderRadius: 8,
  alignItems:'center'

  },
  logoContainer: {
    flexDirection:'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    
    // add any other styles for your logo container
  },
  logo: {
    
    resizeMode:'stretch',
    // add any other styles for your logo image
  },
  loginText: {
    fontSize: 36,
    fontWeight: 'bold',

    alignSelf:'center'
    // add any other styles for your login text
  },
  Image:{
    width: '100%',
    
    position: 'absolute',
    bottom: 0,
  }
  
});

export default register;