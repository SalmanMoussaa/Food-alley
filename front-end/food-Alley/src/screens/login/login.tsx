import React, { FC, useContext, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import logindesgin from "../../../assets/logindesgin.jpg";
import { Border, Color, FontFamily, FontSize } from "../components/GlobalStyles";
import axios from 'axios';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { useMutation } from 'react-query';
import Toast from 'react-native-root-toast';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from '../home/home';
import { UserContext } from "../../../App";
import { err } from 'react-native-svg/lib/typescript/xml';
import { white } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
interface ResponseData {
  user_id: string;
  token: string;
  user_type: string;
}
interface Screen4Props  {}

const Login: FC<Screen4Props> = (props) => {
  const navigation = useNavigation();
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const { setUserId, setUserToken } = useContext(UserContext);
  const toggleState = (currentState: any) => {
    useState(!currentState);
  };
  
  const storeData = async (value: string) => {
    toggleState(value);
    await AsyncStorage.setItem("@id_token", value);
    window.location.reload(false);
  };
  
  const handleSubmitLogin = () => {
    const data = {
      email: myEmail,
      password: myPassword,
      password_confirmation:myPassword
    };
  

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://10.0.2.2:8000/api/login',
      headers: { 
        'Content-Type': 'application/json', 
        
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setUserId(response.data.user_id)
      AsyncStorage.setItem('@user_id', response.data.user_id)
        setUserToken(response.data.token)
        navigation.navigate("Home");
    })
    .catch((error) => {
      console.log(error);
    });}

  const handleMyEmailChange = (value: React.SetStateAction<string>) => {
    setMyEmail(value);
  };

  const handleMyPasswordChange = (value: React.SetStateAction<string>) => {
    setMyPassword(value);
  };
  return (
    <View style={styles.container} >
      <Image
        style={styles.appLogo1}
        resizeMode="cover"
        source={require("../../../assets/logo.png") as ImageSourcePropType}
      />
            <Text style={[styles.login1]}>Login</Text>

      <View style={styles.rectangleParent}>
        <TextInput
          style={[ styles.frameLayout]}
          placeholder="Email"
         
          value={myEmail}
          onChangeText={(value) => setMyEmail(value)}
          />
        <TextInput
          style={[ styles.frameLayout1]}
          placeholder="Password"
         
          value={myPassword}
          onChangeText={(value) => setMyPassword(value)}
          secureTextEntry
        />
        <Pressable
        style={({ pressed }) => [
          styles.rectangleView,
          pressed && { transform: [{ scale: 0.9 }] }
        ]}
        onPress={handleSubmitLogin}
      >
        
        <Text style={[styles.login2]}>Login</Text>
        
      </Pressable>
      </View>
      
      <Image
        style={styles.loginChild}
        resizeMode="cover"
        source={logindesgin}
      />
     
      <Text style={[styles.dontHaveAnContainer]}>
        <Text style={styles.dontHaveAn}>Don't have an account?</Text>
        <Text style={styles.loginTypo} onPress={() =>   navigation.navigate("SignupScreen")}> Signup</Text>
      </Text>
      
    </View>

  );
  
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#FFFF",
    height:"100%",
    //width:"100%"
  },
  frameLayout1:{

   height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
    top:"10%"
  },
  frameLayout: {
    
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    paddingLeft:"4%",
    backgroundColor:"#FFFF",
  },
  
  rectangleParent: {
    top:"20%",
    padding:"5%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  
  },
  login1: {
   
    fontSize: 36,
    top:"10%",
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
  },
  rectangleView: {
    //bottom: "80%",
    top:"25%",
    width:"35%",
    height:55,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.darkGray,
    padding:"3%",
    left: 0,
  },
  login2: {
     //top: 8,
    //left: 43,
    textAlign:"center",
    fontSize:20,
    color: Color.wFBaseWhite,
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "600", 
  },
  rectangleGroup: {
    top: 597,
    left: 119,
  },
  loginChild: {
    top:"23%",
    width:'100%',
    height: 190,
    left: 0,
    //position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.interRegular,
  },
  loginTypo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
  },
  dontHaveAnContainer: {
    top: "1%",
    //left: "20%",
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "center",
  },
  appLogo1: {
    left: '30%',
    top:"10%",
    width: 194,
    height: 201,
   // position: "absolute",
  },
  login: {
    backgroundColor:"#FFFFF7",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Login;


