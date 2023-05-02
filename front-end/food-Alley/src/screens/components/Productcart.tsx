import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border } from "./GlobalStyles";
const ProdcutinCart = () => {
    return (
      <View style={styles.prodcutincart}>
        <Image
          style={styles.prodcutincartChild}
          resizeMode="cover"
          source={require("../assets/rectangle-49.png")}
        />
        <Text  style={styles.priceIcon}>
           
            20$
            </Text>
          
        <Image
          
          resizeMode="cover"
          source={require("../assets/product-name.png")}
        />
        <Text style={styles.productNameIcon}>
        
            20$
            </Text>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x.png")}
        />
        <Image
          style={styles.prodcutincartItem}
          resizeMode="cover"
          source={require("../assets/rectangle-18.png")}
        />
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
  }

  
  
  });
  
  export default ProdcutinCart;

