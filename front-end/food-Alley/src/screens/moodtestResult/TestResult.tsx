import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MoodTest3 = () => {
  return (
    <View style={styles.moodTest3}>
      <View style={styles.productDescriptionProductDeWrapper}>
        <Text
          style={[styles.productDescriptionProduct, styles.productClr]}
        >{`product description product description product description product description product description product description product description `}</Text>
      </View>
      <View style={styles.productDescriptionProductDeWrapper}>
        <Text style={[styles.basedOnYour, styles.productClr]}>
          Based on your responses, it seems like you may be feeling overwhelmed
          or stressed 😫. You may be in need of some comfort food 🍔 and
          relaxation time in front of the TV 📺. It's important to take care of
          yourself during times of stress and prioritize activities that help
          you feel more relaxed and at ease.
        </Text>
      </View>
      <Text style={[styles.moodResult, styles.finishTypo]}>mood result</Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.finish, styles.stakeClr]}>Finish</Text>
      </Pressable>
      <Text style={[styles.text, styles.productClr]}>😫</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/rectangle-17.png")}
        />
        <Text style={[styles.stake, styles.stakeClr]}>stake</Text>
        <Text style={[styles.americanFood, styles.stakeClr]}>
          American food
        </Text>
        <Image
          style={styles.love1Icon}
          resizeMode="cover"
          source={require("../assets/love-1.png")}
        />
      </View>
      <Image
        style={styles.arrowLeft3Icon}
        resizeMode="cover"
        source={require("../assets/arrowleft-3.png")}
      />
    </View>
  );
};


export default MoodTest3;
