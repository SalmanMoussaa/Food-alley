import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../components/GlobalStyles";
import Bar from "../components/bar";
import { useNavigation } from "@react-navigation/native";

const MoodTest = () => {
  const navigation = useNavigation();

  return (
    <>
    <View style={styles.moodTest}>
       <Text style={styles.moodTest1}>Mood Test</Text>
      <Text style={[styles.howAreYou, styles.doUWantTypo]}>
        how are you feeling today?
      </Text>
     
      <Text
        style={[styles.doUWant, styles.doUWantTypo]}
      >{`do u want to test your mood
and eat food based on your
result `}</Text>
      <Image
        style={styles.oig71}
        resizeMode="cover"
        source={require("../../../assets/questionmark.png")}
      />
      <Pressable style={styles.moodTestChild} onPress= {() => navigation.navigate("Moodtestquestion")} />
      <Text style={[styles.startNow, styles.doUWantTypo]}>start now !</Text>
      
    </View>
      <Bar/>
      </>
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
    
    color: Color.black,
  },
  moodTest1: {
    top: 52,
    
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    textAlign: "center",
    color: Color.black,
    fontSize: 30,
    position: "absolute",
  },
  doUWant: {
    top: 535,
    
    color: Color.black,
  },
  moodTestChild: {
    top: 656,
    
    borderRadius: Border.br_3xs,
    backgroundColor: Color.d9D9D9,
    width: 297,
    height: 70,
    position: "absolute",
  },
  startNow: {
    top: 673,
    
    color: Color.wFBase300,
  },
  oig1: {
    top: 222,
    
    width: 250,
    height: 250,
    position: "absolute",
  },
  oig71: {
    top: 206,
    
    width: 300,
    height: 300,
    position: "absolute",
  },
  moodTest: {
    backgroundColor: Color.wFBase200,
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   alignItems:"center",
    
    
  },
});

export default MoodTest;
