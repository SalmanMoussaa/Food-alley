import React, { useState } from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import ProdcutinCart from "../components/Productcart";

const Cart = () => {
    const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState("");
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    { value: "Beirut", label: "Beirut" },
    { value: "lebanon", label: "lebanon" },
]);
const navigation = useNavigation();
    return(

        <View style={styles.cart}>
      <Image
        style={styles.yourFoodCart}
        resizeMode="cover"
        source={require("../assets/your-food-cart.png")}
      />
      <Image
        style={[styles.cartChild, styles.wrapperPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-52.png")}
      />
      <Image
        style={[styles.line26Stroke, styles.wrapperPosition]}
        resizeMode="cover"
        source={require("../assets/line-26-stroke.png")}
      />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.placeOrder, styles.placeOrderTypo]}>
          place order
        </Text>
      </Pressable>
      
      </View>
    );
};
export default Cart;