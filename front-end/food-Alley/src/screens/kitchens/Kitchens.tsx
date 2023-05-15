import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType, ScrollView } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../components/GlobalStyles";
import FoodItem, { Product } from "../components/FoodItem";
import Searchbarcomp from "../components/Searchbarcomp";
import Discount from "../components/Discount";
import Bar from "../components/bar";
import Kitchenscomponent from "../components/Kitchenscomponent";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";

interface Kitchen {
  id: number;
  name: string;
  slang: string;
  imguri: string;
}

const Kitchens = (Kitchen) => {
  const navigation  = useNavigation();
  const [kitchens, setKitchens] = useState<Kitchen[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the product data and update the state
    axios.get("http://10.0.2.2:8000/api/kitchens").then((response) => {
      console.log(response.data);
      setKitchens(response.data);
    });
  }, []);
  const handleSearch = (searchTerm: string) => {
    // Filter the products based on the search term
    setSearchTerm(searchTerm);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.kitchenPage}>
      <View style={[styles.ellipseParent]}>
      <View style={[styles.search]}>
        <Searchbar 
        
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchTerm}
       
         />
        </View>
        <Pressable onPress={() => navigation.navigate("Cart")} >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../../assets/Ellipse2.png")as ImageSourcePropType}
        />
        </Pressable>
        
       
      </View>
      <View >
        <Text style={styles.Kitchens}>Kitchens</Text>
      </View>
      <ScrollView>
      <View style={styles.kitchenPageComp}>
        {kitchens.map((kitchen) => (
          <Pressable onPress={() => navigation.navigate("kitchen", { data: { id:  kitchen.id} })}>
          <Kitchenscomponent key={kitchen.id} FoodItem={kitchen} />
          </Pressable>
          
        ))}
      </View>
      </ScrollView>
      <Bar />
    </View>
  );
};

const styles = StyleSheet.create({
  kitchenPage: {
    backgroundColor: Color.wFBaseWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },







  Kitchens:{
    //top: "23%",
    fontSize: 20,
    fontWeight:800,
    
    color: Color.darkGray,
    left: "5%",
  },

  kitchenPageComp: {
    display: "flex",
    //flex: 2,
    top:"5%",
    flexDirection: "column",
    alignContent: "space-around",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: "5%",

//height: "100%",
   // bottom: "12%",
   // width:"90%",
    left: "5%"
  },
  kitchensIcon: {
    top: "250%",
    width: "40%",
    left: "1%"
  },
  search: {
    // top: "50%",
    width: "85%",
    //left: "15%",
    backgroundColor:"#FFFFF",
   // position:"absolute
  },
  ellipseParent: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    top: 0,
    padding:"5%",
    marginTop:"5%",
    width: "100%",
    left: 0,
  },
  frameChild: {
   //top: "10%",
    //left: "13%",
    width: 80,
    height: 40,
    marginTop:"8%",
    //position: "absolute",
   // backgroundColor:Color.black
  },
  frameItemLayout: {
    height: 40,
    position: "absolute"
  }
});

export default Kitchens;
