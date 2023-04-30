import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

const Foodtype = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <Text style={styles.mezza}>mezza</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.d9D9D9,
    width: 68,
    position: "absolute",
    height: 64,
  },
  mezza: {
    top: 22,
    left: 11,
    fontSize: FontSize.size_sm,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.wFBaseWhite,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 64,
  },
});

export default Foodtype;