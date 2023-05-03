import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Border, FontFamily, FontSize, Color } from "../components/GlobalStyles";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

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
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        username,
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword,
      });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsernameChange = (text: React.SetStateAction<string>) => setUsername(text);
  const handleFirstNameChange = (text: React.SetStateAction<string>) => setFirstName(text);
  const handleLastNameChange = (text: React.SetStateAction<string>) => setLastName(text);
  const handlePhoneNumberChange = (text: React.SetStateAction<string>) => setPhoneNumber(text);
  const handleEmailChange = (text: React.SetStateAction<string>) => setEmail(text);
  const handlePasswordChange = (text: React.SetStateAction<string>) => setPassword(text);
  const handleConfirmPasswordChange = (text: React.SetStateAction<string>) => setConfirmPassword(text);

  const { width, height } = Dimensions.get('window');
  return (
    <View style={styles.register}>
      
        
      
      <View style={styles.rectangleParent}>
        <RNPTextInput
          style={[styles.frameChild, styles.frameChildLayout]}
          placeholder="username"
          label="username"
          value={username}
          onChangeText={handleUsernameChange}
        
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameChildLayout]}
          placeholder="FirstName"
          label="FirstName"
          value={firstName}
          onChangeText={handleFirstNameChange}
          
        />
        <RNPTextInput
          style={[styles.frameInner, styles.frameChildLayout]}
          placeholder="LastName"
          label="LastName"
          value={lastName}
          onChangeText={handleLastNameChange}
          
        />
        <RNPTextInput
          style={[styles.rectangleRnptextinput, styles.frameChildLayout]}
          placeholder="Phone Number"
          label="Phone Number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          
        />
        <RNPTextInput
          style={[styles.frameChild1, styles.frameChildLayout]}
          placeholder="Email"
          label="Email"
          value={email}
          onChangeText={handleEmailChange}
          
        />
        <RNPTextInput
          style={[styles.frameChild2, styles.frameChildLayout]}
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
          
        />
        <RNPTextInput
          style={[styles.frameChild3, styles.frameChildLayout]}
          placeholder="Re-enter Password"
          label="Re-enter Password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          
        />
      </View>
      <Pressable   style={({ pressed }) => [
        styles.registerItem,
          
          pressed && { transform: [{ scale: 0.9 }] }
        ]} 
        onPress={handleRegister}
        />
      <Text style={[styles.register1, styles.register1Typo]}>register</Text>
      <Text style={[styles.createAccount, styles.register1Typo]}>
        create account
      </Text>
      <Pressable style={styles.arrowLeft3} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../../assets/arrow.png")}
        />
      </Pressable>
     
    
   </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 53,
    width: "100%",
    borderRadius: Border.br_3xs,
    left: "6%",
    position: "absolute",
  },
  register1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  registerChild: {
    top: 620,
    width: 430,
    height: 279,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 4,
  },
  frameItem: {
    top: 77,
  },
  frameInner: {
    top: 150,
  },
  rectangleRnptextinput: {
    top: 223,
  },
  frameChild1: {
    top: 296,
  },
  frameChild2: {
    top: 369,
  },
  frameChild3: {
    top: 442,
  },
  rectangleParent: {
    top: 183,
    left: 10,
    width: 346,
    height: 333,
    position: "absolute",
  },
  registerItem: {
    top: 708,
    left: 119,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.darkGray,
    width: 146,
    height: 46,
    position: "absolute",
  },
  register1: {
    top: 716,
    left: 145,
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
    left: 28,
    top: 38,
    width: 50,
    height: 50,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.wFBaseWhite,
    flex: 1,
    
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;