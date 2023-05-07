import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";

interface Props {
  kitchenName: string;
  slang: string;
  imageSource: any;
}

const FrameScreen = ({ kitchenName, slang, imageSource }: Props) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.mammaMiaBuonissimo, styles.italianKitchenFlexBox]}>
          {slang}
        </Text>
        <Text style={[styles.italianKitchen, styles.italianKitchenFlexBox]}>
          {kitchenName}
        </Text>
        <Image
          style={styles.istockphoto1220017909612x612Icon}
          resizeMode="cover"
          source={imageSource}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 354,
    left: 0,
    top: 0,
    position: "absolute",
    height: 111,
  },
  italianKitchenFlexBox: {
    textAlign: "left",
    color: Color.wFBaseWhite,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_37xl,
    borderBottomRightRadius: Border.br_37xl,
    borderBottomLeftRadius: Border.br_7xs,
    backgroundColor: Color.d9D9D9,
  },
  mammaMiaBuonissimo: {
    top: 74,
    left: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.itimRegular,
    width: 174,
    height: 19,
  },
  italianKitchen: {
    top: 33,
    left: 23,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    width: 172,
    height: 30,
  },
  istockphoto1220017909612x612Icon: {
    top: 10,
    left: 251,
    borderRadius: Border.br_42xl,
    width: 90,
    height: 92,
    position: "absolute",
  },
  groupParent: {
    
    

  },
});

export default FrameScreen;
