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
    return(

        <View><ProdcutinCart/></View>
    );
};
export default Cart;