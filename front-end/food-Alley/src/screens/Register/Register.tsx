import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../components/GlobalStyles";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const Register = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.register}>
      <Image
        style={styles.registerChild}
        resizeMode="cover"
        source={require("../../../assets/logindesgin.jpg")}
      />
      <View style={styles.rectangleParent}>
        <RNPTextInput
          style={[styles.frameChild, styles.frameChildLayout]}
          placeholder="username"
          label="username"
        
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameChildLayout]}
          placeholder="FirstName"
          label="FirstName"
          
        />
        <RNPTextInput
          style={[styles.frameInner, styles.frameChildLayout]}
          placeholder="LastName"
          label="LastName"
          
        />
        <RNPTextInput
          style={[styles.rectangleRnptextinput, styles.frameChildLayout]}
          placeholder="Phone Number"
          label="Phone Number"
          
        />
        <RNPTextInput
          style={[styles.frameChild1, styles.frameChildLayout]}
          placeholder="Email"
          label="Email"
          
        />
        <RNPTextInput
          style={[styles.frameChild2, styles.frameChildLayout]}
          placeholder="password"
          label="Password"
          
        />
        <RNPTextInput
          style={[styles.frameChild3, styles.frameChildLayout]}
          placeholder="Re-enter Password"
          label="Re-enter Password"
          
        />
      </View>
      <Pressable style={styles.registerItem} />
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
    width: 336,
    borderRadius: Border.br_3xs,
    left: 10,
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
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;