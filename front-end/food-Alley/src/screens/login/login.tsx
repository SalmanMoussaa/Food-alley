import  React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Border, Color, FontFamily, FontSize } from "../components/GlobalStyles";

const signin = () => {
  return (
    <View style={styles.login}>
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
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          placeholder="password"
          label="password"
          mode="outlined"
          left={<RNPTextInput.Icon style={{ marginTop: "50%" }} name="lock" />}
          theme={{ colors: { background: "#d9d9d9" } }}
        />
        <RNPTextInput
          style={[styles.frameInner, styles.frameLayout]}
          placeholder="Re-enter password"
          label="Re-enter password"
          mode="outlined"
          left={<RNPTextInput.Icon style={{ marginTop: "50%" }} name="lock" />}
          theme={{ colors: { background: "#d9d9d9" } }}
        />
      </View>
      <Text style={[styles.login1, styles.loginFlexBox]}>Login</Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.login2, styles.loginFlexBox]}>login</Text>
      </Pressable>
      <Image
        style={styles.loginChild}
        resizeMode="cover"
        source={require("")}
      />
      <Text style={[styles.dontHaveAnContainer, styles.loginFlexBox]}>
        <Text style={styles.dontHaveAn}>don’t have an account?</Text>
        <Text style={styles.loginTypo}> signup</Text>
      </Text>
      <Image
        style={styles.appLogo1}
        resizeMode="cover"
        source={require("C:/Users/abirm/OneDrive/Desktop/Food-Alley/front-end/food-Alley/assets/logo.png")}
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
    width: 393,
    height: 232,
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
    height: 852,
    overflow: "hidden",
  },
});

export default signin;