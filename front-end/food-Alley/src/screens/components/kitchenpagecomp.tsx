import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, Border, FontFamily } from "./GlobalStyles";

const kitchenpagecomp = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text
          style={[styles.usaOnPlate, styles.usaOnPlateTypo]}
        >{`"USA on plate!"
`}</Text>
        <Text style={[styles.americanKitchen, styles.usaOnPlateTypo]}>
          american Kitchen
        </Text>
        <Image
          style={styles.resturantImgIcon}
          resizeMode="cover"
          source={require("../../../assets/americanKitchen.png")}
        />
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require("../../../assets/arrowwhite.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 354,
    left: "1%",
    top: 0,
    position: "absolute",
  },
  usaOnPlateTypo: {
    textAlign: "left",
    color: Color.wFBaseWhite,
    fontSize: FontSize.size_base,
    left: 17,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_37xl,
    borderBottomRightRadius: Border.br_37xl,
    borderBottomLeftRadius: Border.br_7xs,
    backgroundColor: Color.d9D9D9,
    height: 116,
  },
  usaOnPlate: {
    top: 86,
    fontFamily: FontFamily.itimRegular,
  },
  americanKitchen: {
    top: 65,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
  },
  resturantImgIcon: {
    top: 10,
    left: 253,
    borderRadius: Border.br_42xl,
    width: 90,
    height: 91,
    position: "absolute",
  },
  arrowIcon: {
    
    
    left: "3  %",
    top: 10,
    position: "absolute",
  },
  rectangleParent: {
    height: 124,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 124,
  },
});

export default kitchenpagecomp;
