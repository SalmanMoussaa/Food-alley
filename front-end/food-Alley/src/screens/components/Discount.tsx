import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, FontSize, Border, Color } from "./GlobalStyles";
import { green100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

interface DiscountProps {
  discount: string;
  image: string;
}

const Discount: React.FC<DiscountProps> = ({ discount, image }) => {
  return (
    <Pressable style={styles.groupParent}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.discount, styles.discountTypo]}>{discount}</Text>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={{ uri: image }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 152,
    left: 5,
    top: 0,
    height:"100%",
  },
  discountTypo: {
    width: 101,
    textAlign: "left",
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    left: 29,
    top: 56,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_4xl,
    backgroundColor: "#900A3D",
  },
  discount: {
    color: "#000",
  },
  groupItem: {
    top: 12,
    left: 2,
    borderRadius: Border.br_65xl,
    width: 147,
    height: 37,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 78,
    top:"2%"
    
  },
});

export default Discount;
