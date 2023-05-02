import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
const ProdcutinCart = () => {
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
        <View style={styles.prodcutincart}>
        <Image
          style={styles.prodcutincartChild}
          resizeMode="cover"
          source={require("../assets/rectangle-49.png")}
        />
        <TouchableOpacity
          style={styles.x}
          activeOpacity={0.2}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/x.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.prodcutincartItem}
          resizeMode="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <Text style={[styles.productName, styles.priceTypo]}>Product name</Text>
        <Text style={[styles.price, styles.priceTypo]}>price</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    prodcutincartChild: {
      top: 0,
      left: 0,
      width: 353,
      position: "absolute",
      height: 69,
    
    },

priceIcon: {
  top: 46,
  left: 95,
  width: 37,
  height: 15,
  opacity: 0.5,
  position: "absolute",
},
productNameIcon: {
    top: 14,
    left: 94,
    width: 163,
    height: 22,
    position: "absolute",
  },
  xIcon: {
    top: 8,
    left: 334,
    width: 10,
    height: 11,
    position: "absolute",
  },
  prodcutincartItem: {
    top: 7,
    left: 9,
    borderRadius: Border.br_3xs,
    width: 59,
    height: 54,
    position: "absolute",
  },
  prodcutincart: {
    flex: 1,
    width: "100%",
    height: 69,
  },priceTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    left: 93,
    position: "absolute",
  },
  
  icon: {
    height: "100%",
    width: "100%",
  },
  x: {
    left: 334,
    top: 8,
    width: 10,
    height: 11,
    position: "absolute",
  },
 
  
  price: {
    top: 46,
    fontSize: FontSize.size_base,
    opacity: 0.5,
  },
  productName: {
    top: 17,
    fontSize: FontSize.size_5xl,
  },
  

  
  
  });
  
  export default ProdcutinCart;

