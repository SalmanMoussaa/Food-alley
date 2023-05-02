import React, { useState } from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../components/GlobalStyles";
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
        source={require("../../../assets/line.png")}
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
          source={require("../../../assets/arrow.png")}
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
const styles = StyleSheet.create({
    frameDropdownValue: {
      color: "#e2e7f0",
      fontSize: 20,
      fontWeight: "800",
      fontFamily: "Inter_extrabold",
    },
    frameDropdownText: {
      color: "#fe5932",
      fontSize: 14,
      fontWeight: "800",
      fontFamily: "Inter_extrabold",
    },
    wrapperPosition: {
      width: 393,
      left: 0,
      position: "absolute",
    },
    groupChildLayout: {
      height: 55,
      width: 216,
      position: "absolute",
    },
    placeOrderTypo: {
      textAlign: "left",
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      position: "absolute",
    },
    taxTypo: {
      color: Color.white,
      textAlign: "left",
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      fontSize: FontSize.size_mini,
      position: "absolute",
    },
    text1Typo: {
      top: 618,
      color: Color.white,
      textAlign: "left",
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      fontSize: FontSize.size_mini,
      position: "absolute",
    },
    textTypo: {
      left: 335,
      color: Color.white,
      textAlign: "left",
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      fontSize: FontSize.size_mini,
      position: "absolute",
    },
    yourFoodCart: {
      top: 57,
      left: 138,
      width: 142,
      height: 20,
      position: "absolute",
    },
    cartChild: {
      top: 557,
      height: 295,
    },
    line26Stroke: {
      top: 635,
      height: 1,
    },
    groupChild: {
      top: 0,
      borderRadius: Border.br_3xs,
      backgroundColor: Color.tomato,
      left: 0,
      width: 216,
    },
    placeOrder: {
      top: 19,
      left: 61,
      color: Color.wFBase300,
      fontSize: FontSize.size_mini,
      textAlign: "left",
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
    },
    rectangleParent: {
      top: 743,
      left: 84,
    },
    wrapper: {
      top: 433,
      height: 94,
    },
    chooseLocation: {
      top: 404,
      left: 20,
      fontSize: FontSize.size_lg,
      color: Color.black,
    },
    icon: {
      height: "100%",
      width: "100%",
    },
    arrowLeft3: {
      left: 18,
      top: 37,
      width: 50,
      height: 50,
      position: "absolute",
    },
    subTotal: {
      left: 25,
      top: 664,
    },
    cartTotal: {
      left: 17,
    },
    delivery: {
      left: 19,
      top: 582,
    },
    tax: {
      left: 24,
      top: 600,
    },
    text: {
      top: 664,
    },
    text1: {
      left: 336,
    },
    text2: {
      top: 600,
    },
    text3: {
      top: 582,
    },
    cart: {
      backgroundColor: Color.wFBase200,
      flex: 1,
      height: 852,
      overflow: "hidden",
      width: "100%",
    },
  });
  
  export default Cart;