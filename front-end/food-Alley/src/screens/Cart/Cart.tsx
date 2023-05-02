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
      <View style={[styles.wrapper, styles.wrapperPosition]}>
        <DropDownPicker
          open={frameDropdownOpen}
          setOpen={setFrameDropdownOpen}
          value={frameDropdownValue}
          setValue={setFrameDropdownValue}
          placeholder="location name"
          items={frameDropdownItems}
          labelStyle={styles.frameDropdownValue}
          textStyle={styles.frameDropdownText}
        />
      </View>
      <Text style={[styles.chooseLocation, styles.placeOrderTypo]}>
        choose location
      </Text>
      <Pressable style={styles.arrowLeft3} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowleft-3.png")}
        />
      </Pressable>
      <Text style={[styles.subTotal, styles.taxTypo]}>sub total:</Text>
      <Text style={[styles.cartTotal, styles.text1Typo]}>Cart Total:</Text>
      <Text style={[styles.delivery, styles.taxTypo]}>Delivery:</Text>
      <Text style={[styles.tax, styles.taxTypo]}>Tax:</Text>
      <Text style={[styles.text, styles.textTypo]}>52$</Text>
      <Text style={[styles.text1, styles.text1Typo]}>52$</Text>
      <Text style={[styles.text2, styles.textTypo]}>52$</Text>
      <Text style={[styles.text3, styles.textTypo]}>52$</Text>
    </View>
    );
};
export default Cart;