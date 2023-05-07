import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import Searchbarcomp from "../components/Searchbarcomp";
import Discount from "../components/Discount";
import Bar from "../components/bar";
import Kitchenscomponent from "../components/Kitchenscomponent";

const Kitchens = () => {
  return (
    <View style={styles.kitchenPage}>
      <View style={[styles.ellipseParent, styles.frameItemLayout]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../../assets/Ellipse 2.png")as ImageSourcePropType}
        />
        <View style={[styles.search]}>
        <Searchbarcomp />
        </View>
      </View>
      <View>
      <Image

          style={[styles.kitchensicon]}
          resizeMode="cover"
          source={require("../../../assets/kitchens.png")as ImageSourcePropType}
        />
        
      </View>
      <View style={styles.kitchenpagecomp}>
          <Kitchenscomponent kitchenName={"italian Kitchen "} slang={"Mamma mia, buonissimo!"} imageSource={"../../assets/food.png"}   />
          <Kitchenscomponent kitchenName={"American Kitchen"} slang={"let's eat Meat"} imageSource={require("../../../assets/food.png")}/>
          <Kitchenscomponent kitchenName={"American Kitchen"} slang={"let's eat Meat"} imageSource={require("../../../assets/food.png")}/>


        </View>
        <Bar />

      </View>



  );
};

const styles = StyleSheet.create({

kitchenPage:{
  
    backgroundColor: Color.wFBaseWhite,
    flex:1,
    display:"flex",
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  kitchenpagecomp:{
    
    display:"flex",
    flexDirection:"column",
    alignContent:"space-between",
    alignItems:"flex-start",
    justifyContent:"space-between",
    height:"100%",
    
    
    top:"15%",
    left:"1%"
    
  },
  kitchensicon:{
    top: "250%",
    width:"40%",
    left: "1%",

  },
  search:{
    top: "75%",
    width: 349, 
    left: 24,
  },
  ellipseParent: {
    top: 0,
    width: "100%",
    left: 0,
  },frameChild: {
    top: 0,
    left: 299,
    width: 50,
    height: 50,
    position: "absolute",
  },frameItemLayout: {
    height: 40,
    position: "absolute",
  },

});
export default Kitchens;