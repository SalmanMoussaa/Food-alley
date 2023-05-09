import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType, ScrollView } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import Searchbarcomp from "../components/Searchbarcomp";
import Discount from "../components/Discount";
import Bar from "../components/bar";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
export interface Product {
  id: React.Key;
  name:string;
  description: string;
  preparation_time: string;
  price:string;
  kitchen_id:React.Key;
  imguri:string;
  // Other properties...
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    // Fetch the product data and update the state
    axios.get("http://10.0.2.2:8000/api/recipes").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <View style={styles.homePage}>
      <View style={[styles.ellipseParent, styles.frameItemLayout]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../../assets/Ellipse2.png")as ImageSourcePropType}
        />
        <View style={[styles.search]}>
        <Searchbarcomp />
        </View>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          resizeMode="cover"
          source={require("../../../assets/Ellipse2.png")as ImageSourcePropType}
        />
      </View>
      <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.foodItemsContainer}>
          {products.map((product) => (
            <FoodItem key={product.id} FoodItem={product} />
          ))}
        </View>
      </ScrollView>
    </View>
      
      
      
     
      
      <ScrollView horizontal style={styles.homePageChild}   showsHorizontalScrollIndicator={false}
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
  items:{
    padding: 5,
    margin: 15
  },
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
  container: {
    flex: 1,
    left:2,
    top:"30%",
    width:"100%",
    height:"100%",
    backgroundColor: "#fff",
  },
  foodItemsContainer: {
    
    flexDirection: "row",
    justifyContent:"space-between",
    
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
   marginLeft:25,
  display:"flex",  
  width: "50%",
  flexDirection:"row",
  justifyContent:"space-between",
    top:"55%",
    left:"1%",
    
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
    flexDirection:"column",
    
    top: "10%",
    backgroundColor: "#C70039",
    width: "100%",
    height: "12%",
    left: 0,
    position:"absolute"
    
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
