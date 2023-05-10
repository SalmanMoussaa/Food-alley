import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Color, FontSize, Border, FontFamily } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Key } from "react";
import Kitchen from "../Kitchen/Kitchen";

interface kitchensProps {
  FoodItem:kitchens;
  }
  export interface kitchens{
    id:Key;
    name:string;
    slang:string;
    imguri:string
  
  
  }
const kitchenpagecomp: React.FC<kitchensProps> = ({ FoodItem  }) => {
  const navigation = useNavigation();
  const id=FoodItem.id;


  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text
          style={[styles.usaOnPlate, styles.usaOnPlateTypo]}
        >{FoodItem.slang}
`</Text>
        <Text style={[styles.americanKitchen, styles.usaOnPlateTypo]}>
          {FoodItem.name}
        </Text>
        <Image
          style={styles.resturantImgIcon}
          resizeMode="cover"
          source={{ uri:FoodItem.imguri}}
        />
        <Pressable  onPress={() => navigation.goBack()}>
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require("../../../assets/arrowwhite.png")}
          
        />
        </Pressable>
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
    top:"15%"
  },
});

export default kitchenpagecomp;
