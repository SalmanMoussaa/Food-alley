import React, { FC, useContext, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  TouchableOpacity
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from '../home/home';
import { UserContext } from "../../../App";
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
    <View >
      <View style={styles.rectangleParent}>
        <RNPTextInput
          style={[styles.frameChild, styles.frameLayout]}
          placeholder="Email"
          label="  Email"
          mode="outlined"
          left={
            <RNPTextInput.Icon style={{ marginTop: "50%" }} name="email-box" />
          }
          theme={{ colors: { background: "#d9d9d9" } }}
          value={myEmail}
          onChangeText={(value) => setMyEmail(value)}
          />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          placeholder="Password"
          label="Password"
          mode="outlined"
          left={<RNPTextInput.Icon style={{ marginTop: "50%" }} name="lock" />}
          theme={{ colors: { background: "#d9d9d9" } }}
          value={myPassword}
          onChangeText={(value) => setMyPassword(value)}
          secureTextEntry
        />
      </View>

      <Image
        style={styles.loginChild}
        resizeMode="cover"
        source={logindesgin}
      />
      <Text style={[styles.login1, styles.loginFlexBox]}>Login</Text>
      <Pressable
        style={({ pressed }) => [
          styles.rectangleGroup,
          styles.rectangleLayout,
          pressed && { transform: [{ scale: 0.9 }] }
        ]}
        onPress={handleSubmitLogin}
      >
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.login2, styles.loginFlexBox]}>Login</Text>
      </Pressable>
      <Text style={[styles.dontHaveAnContainer, styles.loginFlexBox]}>
        <Text style={styles.dontHaveAn}>Don't have an account?</Text>
        <Text style={styles.loginTypo} onPress={() =>   navigation.navigate("SignupScreen")}> Signup</Text>
      </Text>
      <Image
        style={styles.appLogo1}
        resizeMode="cover"
        source={require("../../../assets/logo.png") as ImageSourcePropType}
      />
    </View>

  );
  
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 53,
    width: 336,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  loginFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 46,
    width: 146,
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
  rectangleParent: {
    top: 366,
    left: 24,
    width: 346,
    height: 230,
    position: "absolute",
  },
  login1: {
    top: 225,
    left: 142,
    fontSize: 36,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
  },
  rectangleView: {
    top: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.darkGray,
    left: 0,
  },
  login2: {
    top: 8,
    left: 43,
    fontSize: FontSize.size_5xl,
    color: Color.wFBaseWhite,
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
  },
  rectangleGroup: {
    top: 597,
    left: 119,
  },
  loginChild: {
    top: 620,
    width: 430,
    height: 202,
    left: 0,
    position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.interRegular,
  },
  loginTypo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
  },
  dontHaveAnContainer: {
    top: 717,
    left: 75,
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "left",
  },
  appLogo1: {
    top: 24,
    left: 99,
    width: 194,
    height: 201,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.wFBaseWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Login;


