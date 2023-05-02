import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../components/GlobalStyles";

const MoodTest = () => {
  return (
    <View style={styles.moodTest}>
      <Text style={[styles.howAreYou, styles.doUWantTypo]}>
        how are you feeling today?
      </Text>
      <Text style={styles.moodTest1}>mood test</Text>
      <Text
        style={[styles.doUWant, styles.doUWantTypo]}
      >{`do u want to test your mood
and east food based on your
result `}</Text>
      <Pressable style={styles.moodTestChild} />
      <Text style={[styles.startNow, styles.doUWantTypo]}>start now !</Text>
      <View style={styles.oig1} />
      <Image
        style={styles.oig71}
        resizeMode="cover"
        source={require("../../../assets/questionmark.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  doUWantTypo: {
    textAlign: "left",
    fontFamily: FontFamily.indieFlowerRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  howAreYou: {
    top: 142,
    left: 49,
    color: Color.black,
  },
  moodTest1: {
    top: 52,
    left: 136,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  doUWant: {
    top: 535,
    left: 54,
    color: Color.black,
  },
  moodTestChild: {
    top: 656,
    left: 50,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.d9D9D9,
    width: 297,
    height: 70,
    position: "absolute",
  },
  startNow: {
    top: 673,
    left: 146,
    color: Color.wFBase300,
  },
  oig1: {
    top: 222,
    left: 72,
    width: 250,
    height: 250,
    position: "absolute",
  },
  oig71: {
    top: 206,
    left: 41,
    width: 300,
    height: 300,
    position: "absolute",
  },
  moodTest: {
    backgroundColor: Color.wFBase200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default MoodTest;
