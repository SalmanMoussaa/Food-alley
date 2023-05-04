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

const styles = StyleSheet.create({
    productClr: {
      color: Color.black,
      textAlign: "left",
    },
    finishTypo: {
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
    },
    groupChildLayout: {
      height: 55,
      width: 216,
      position: "absolute",
    },
    groupPosition: {
      backgroundColor: Color.d9D9D9,
      left: 0,
      top: 0,
    },
    stakeClr: {
      color: Color.wFBase300,
      textAlign: "left",
      position: "absolute",
    },
    groupLayout: {
      height: 164,
      width: 162,
      position: "absolute",
    },
    productDescriptionProduct: {
      fontFamily: FontFamily.interRegular,
      textAlign: "left",
      fontSize: FontSize.size_sm,
      color: Color.black,
      flex: 1,
    },
    productDescriptionProductDeWrapper: {
      top: 382,
      left: 30,
      backgroundColor: Color.gainsboro,
      width: 322,
      flexDirection: "row",
      padding: Padding.p_lg,
      borderRadius: Border.br_3xs,
      position: "absolute",
      overflow: "hidden",
    },
    basedOnYour: {
      fontFamily: FontFamily.itimRegular,
      textAlign: "left",
      fontSize: FontSize.size_sm,
      color: Color.black,
      flex: 1,
    },
    moodResult: {
      top: 345,
      left: 143,
      fontSize: FontSize.size_lg,
      color: Color.darkGray,
      textAlign: "left",
      position: "absolute",
    },
    groupChild: {
      height: 55,
      width: 216,
      position: "absolute",
      borderRadius: Border.br_3xs,
    },
    finish: {
      top: 19,
      left: 86,
      fontSize: FontSize.size_mini,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
    },
    rectangleParent: {
      top: 743,
      left: 84,
    },
    text: {
      top: 160,
      left: 36,
      fontSize: 128,
      fontFamily: FontFamily.indieFlowerRegular,
      width: 160,
      height: 119,
      textAlign: "left",
      position: "absolute",
    },
    groupItem: {
      borderRadius: 13,
      backgroundColor: Color.d9D9D9,
      left: 0,
      top: 0,
    },
    groupInner: {
      top: 47,
      left: 29,
      width: 99,
      height: 70,
      borderRadius: Border.br_3xs,
      position: "absolute",
    },
    stake: {
      top: 14,
      left: 41,
      fontSize: FontSize.size_5xl,
      fontWeight: "700",
      fontFamily: FontFamily.interBold,
    },
    americanFood: {
      top: 121,
      left: 11,
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
    },
    love1Icon: {
      top: 133,
      left: 130,
      width: 24,
      height: 24,
      position: "absolute",
    },
    rectangleGroup: {
      top: 143,
      left: 193,
    },
    arrowLeft3Icon: {
      top: 32,
      left: 23,
      width: 50,
      height: 50,
      position: "absolute",
    },
    moodTest3: {
      backgroundColor: Color.wFBaseWhite,
      width: "100%",
      height: 852,
      overflow: "hidden",
      flex: 1,
    },
  });

export default MoodTest3;
