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
  });
  
  export default ProdcutinCart;