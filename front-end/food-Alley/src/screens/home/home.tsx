import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType, ScrollView } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import Searchbarcomp from "../components/Searchbarcomp";
import Discount from "../components/Discount";
import Bar from "../components/bar";
import { useNavigation } from "@react-navigation/native";


const HomePage = () => {
  return (
    <View style={styles.homePage}>
      <View style={[styles.ellipseParent, styles.frameItemLayout]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../../assets/Ellipse 2.png")as ImageSourcePropType}
        />
        <View style={[styles.search]}>
        <Searchbarcomp />
        </View>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          resizeMode="cover"
          source={require("../../../assets/Ellipse 2.png")as ImageSourcePropType}
        />
      </View>
      <View style={[styles.homePageInner, styles.rectangleParentLayout]}>
        <FoodItem foodname={"salman"} imageUri={"../../../assets/Ellipse 2.png"} kitchenName={"american"}/>
        
      </View>
      
      
      
     
      
      <ScrollView style={styles.homePageChild}   showsHorizontalScrollIndicator={false}
   automaticallyAdjustContentInsets={true} 

 >
        <Discount discount={"20%"} image={"../../../assets/Ellipse 2.png"}/>

        </ScrollView >
      <Text style={[styles.suggestedFoods, styles.americanFoodTypo]}>
        Suggested foods
      </Text>
      <View style={styles.homePageItem} />
      
      <Bar />
      
    </View>
  );
};

const styles = StyleSheet.create({
  bar:{ top: 0,
    left: 0,
    width:"120%",
    height:"100%"},
  frameItemLayout: {
    height: 40,
    position: "absolute",
  },
  frameItemPosition: {
    top: 0,
    left: 0,
    width:"100%",
    height:"100%"
  },
  rectangleParentLayout: {
    height: 164,
    width: 162,
    position: "absolute",
  },
  americanFoodTypo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition: {
    top: 460,
    height: 164,
    width: 162,
    position: "absolute",
  },
  groupViewPosition: {
    top: 635,
    height: 164,
    width: 162,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 299,
    width: 50,
    height: 50,
    position: "absolute",
  },
  frameItem: {
    width: 40,
    left: 0,
    height: 40,
    position: "absolute",
  },
  search:{
    top: "40%",
    width: 349,
    left: 24,
  },
  ellipseParent: {
    top: 0,
    width: "100%",
    left: 0,
  },
  groupChild: {
    borderRadius: 13,
    backgroundColor: "#C70039",
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 47,
    left: 29,
    borderRadius: Border.br_3xs,
    width: 99,
    height: 70,
    position: "absolute",
  },
  
  
  rectangleParent: {
    left: 0,
    top: 0,
  },
  homePageInner: {
    left: "5%",
    top: "27%",
    width: "100%",
  },
  rectangleGroup: {
    left: 203,
  },
  rectangleContainer: {
    left: 24,
  },
  groupView: {
    left: 26,
  },
  rectangleParent1: {
    left: 203,
  },
  rectangleParent2: {
    left: 200,
    top: 270,
    width: 162,
  },
  homePageChild: {
    flexDirection:"row",
    alignContent:"flex-start",
    top: "10%",
    backgroundColor: "#C70039",
    width: "100%",
    height: "12%",
    left: 0,
    position: "absolute",
  },
  suggestedFoods: {
    top: "23%",
    fontSize: 18,
    color: Color.darkGray,
    left: 24,
  },
  homePageItem: {
    top: "22%",
    left: 22,
    width: 353,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  homePage: {
    backgroundColor: Color.wFBaseWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default HomePage;
