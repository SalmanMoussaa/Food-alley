import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";

interface kitchencompProps {
  kitchenName: string;
  kitchenImage: any;
}

const Kitchenscomponent: React.FC<kitchencompProps> = ({
  kitchenName,
  kitchenImage,
}) => {
  return (
    <Pressable style={styles.groupParent}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.discount, styles.discountTypo]}>10% discount</Text>
        <Image style={styles.groupItem} resizeMode="cover" source={kitchenImage} />
      </View>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.discount1, styles.discountTypo]}>
          10% discount
        </Text>
        <Text style={[styles.kitchenName, styles.discountTypo]}>
          {kitchenName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 152,
    left: 0,
    top: 0,
    position: "absolute",
    height: 78,
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
    backgroundColor: Color.d9D9D91,
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
  discount1: {
    color: Color.wFBaseWhite,
  },
  kitchenName: {
    color: Color.wFBaseWhite,
    top: 56,
    left: 29,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 78,
  },
});

export default Kitchenscomponent;
