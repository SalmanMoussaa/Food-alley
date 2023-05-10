import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Border, FontFamily, FontSize, Color } from "../components/GlobalStyles";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import logindesgin from "../../../assets/logindesgin.jpg";


const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = async () => {
    
      let data = JSON.stringify({
        first_name: firstName,
       Last_name: lastName,
         username:username,
        email: email,
        email_verified_at: null,
        password: password,
        password_confirmation: confirmPassword,
        adress: "beirut",
        phone_number: phoneNumber,
        is_admin: "1"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://10.0.2.2:8000/api/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        if (error.username) {
          console.log("Username is already taken");
          alert("username is already registered")
        }
        if (error.email) {
          console.log("Email is already registered");
          alert("Email is already registered")
        }
        if (error.phone_number) {
          console.log("Phone number is already registered");
          alert("Phone number is already registered")
        }
        console.log("An error occurred during the request:", error.message);
        console.log(error);
        console.log(error.response.data);
      });
  }

  const handleUsernameChange = (text: React.SetStateAction<string>) => setUsername(text);
  const handleFirstNameChange = (text: React.SetStateAction<string>) => setFirstName(text);
  const handleLastNameChange = (text: React.SetStateAction<string>) => setLastName(text);
  const handlePhoneNumberChange = (text: React.SetStateAction<string>) => setPhoneNumber(text);
  const handleEmailChange = (text: React.SetStateAction<string>) => setEmail(text);
  const handlePasswordChange = (text: React.SetStateAction<string>) => setPassword(text);
  const handleConfirmPasswordChange = (text: React.SetStateAction<string>) => setConfirmPassword(text);

  const { width, height } = Dimensions.get('window');
  return (
    <View style={styles.register} >
      <Pressable style={styles.arrowLeft3} onPress={() => navigation.goBack()}>
        <Image
          resizeMode="cover"
          source={require("../../../assets/arrow.png")}
        />
      </Pressable>
      <Text style={[ styles.register1Typo]}>
        create account
      </Text>
      
      <View style={styles.rectangleParent}>
        <TextInput
          style={[styles.frameChild,]}
          placeholder="username"
          value={username}
          onChangeText={handleUsernameChange}
        
        />
        <TextInput
          style={[styles.frameChild, ]}
          placeholder="FirstName"
          value={firstName}
          onChangeText={handleFirstNameChange}
          
        />
        <TextInput
          style={[styles.frameChild, ]}
          placeholder="LastName"
          value={lastName}
          onChangeText={handleLastNameChange}
          
        />
        <TextInput
          style={[styles.frameChild, ]}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          
        />
        <TextInput
          style={[styles.frameChild,]}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          
        />
        <TextInput
          style={[styles.frameChild,]}
          placeholder="password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        <TextInput
          style={[styles.frameChild, ]}
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry
        />
        <Pressable   style={({ pressed }) => [
          styles.rectangleView,
          
          pressed && { transform: [{ scale: 0.9 }] }
        ]} 
        onPress={handleRegister}
        >
      <Text style={[ styles.login2]}>register</Text>
      </Pressable>
      </View>
      
      
      
      <Image
        style={styles.loginChild}
        resizeMode="cover"
        source={logindesgin}
      />
    
   </View>
  );
};

const styles =  StyleSheet.create({
  loginChild: {
    bottom:"0%",
    top:"9%",
    width:'100%',
    height: 190,
    left: 0,
   // position: "absolute",
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
  rectangleView: {
    //bottom: "80%",
   top:"108%",
    width:"35%",
    height:55,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.darkGray,
    padding:"7%",
    position:"absolute"
  },
  frameChildLayout: {
    height: 55,
    
    width: "100%",
    borderRadius: Border.br_3xs,
    left: "8%",
    position: "absolute",
  },
  register1Typo: {
    //top:"2%",
    bottom:"1%",
    textAlign: "center",
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "600",
    fontSize: 30,
    width:"50%",
    left:"25%",
    position:"relative",
    //backgroundColor:Color.black
  },
  registerChild: {
    top: 620,
    width: 430,
    height: 279,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
marginBottom:"2%"  },
  frameItem: {
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
  },
  frameInner: {
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
  },
  rectangleRnptextinput: {
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
  },
  frameChild1: {
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
  },
  frameChild2: {
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
  },
  frameChild3: {
    height: 55,
    width: "100%",
    borderRadius:10,
    borderWidth:2,
    borderColor:Color.black,
    backgroundColor:"#FFFF",
    paddingLeft:"4%",
  },
  rectangleParent: {
    top:"3%",
    padding:"5%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  registerItem: {
    top: "79%",
    left: "30%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.darkGray,
    width: 146,
    height: 46,
    position: "absolute",
  },
  register1: {
    top: "79.5%",
    left: "37%",
    color: Color.wFBaseWhite,
  },
  createAccount: {
    top: 49,
    left: 107,
    color: Color.black,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft3: {
    left: "5%",
    top: "6%",
    width: 60,
    height: 60,
    
  },
  register: {
    backgroundColor: Color.wFBaseWhite,
    
height:"100%",

  }
});

export default Register;