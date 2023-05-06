import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import Searchbarcomp from "../components/Searchbarcomp";
import Discount from "../components/Discount";
import Bar from "../components/bar";
import Kitchenscomponent from "../components/Kitchenscomponent";
import Kitchenpagecomp from "../components/kitchenpagecomp";
import Foodtype from "../components/Foodtype";


const Kitchen = () => {
    return (
      <View>
        
        <Kitchenpagecomp/>
        <View style={[styles.search]}>
        <Searchbarcomp />
        </View>
        <View style={[styles.parenttypes]}>
            <Foodtype/>

        </View>
        <View style={[styles.parentfoodItems]}><FoodItem foodname={"salman"} imageUri={""} kitchenName={"beirut"}/>
        
        </View>
        
      </View>
    );
  };
  const styles =StyleSheet.create({
    search:{
        top: "200%",
    width: "115%",
    left: "-9%",
    backgroundColor:"#FFFFFF",


    },
    parentfoodItems:{
        left:"6%",
        top:"350%"
    },
    parenttypes:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        left:"3%",
        top:"200%",
        width:"100%",
        backgroundColor:"#4f4"
        
    }


  })
  
  export default Kitchen;