import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import Searchbarcomp from "../components/Searchbarcomp";
import Discount from "../components/Discount";
import Bar from "../components/bar";
import Kitchenscomponent from "../components/Kitchenscomponent";
import Kitchenpagecomp from "../components/kitchenpagecomp";

const Kitchen = () => {
    return (
      <View>
        
        <Kitchenpagecomp/>
      </View>
    );
  };
  
  export default Kitchen;