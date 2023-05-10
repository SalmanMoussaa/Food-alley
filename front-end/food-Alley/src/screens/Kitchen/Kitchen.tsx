import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";

import Kitchenpagecomp from "../components/kitchenpagecomp";
import Searchbarcomp from "../components/Searchbarcomp";
import Foodtype from "../components/Foodtype";
import FoodItem from "../components/FoodItem";

export interface Product {
  id: React.Key;
  name: string;
  description: string;
  preparation_time: string;
  price: string;
  kitchen_id: React.Key;
  imguri: string;
  // Other properties...
}
interface Kitchen {
  id: number;
  name: string;
  slang: string;
  imguri: string;
}

const Kitchen = ({route}) => {
  const { data } = route.params;
  const [orderData, setOrderData] = useState({
    Kitchen_id: data.id,
    // add other order details here
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [kitchens, setKitchens] = useState<Kitchen[]>([]);
  
  const kitchenIdToShow = data?.id; // Get the ID of the kitchen to show
  const kitchenToShow = kitchens.find(kitchen => kitchen.id === kitchenIdToShow); // Find the kitchen with the matching ID



  useEffect(() => {
    // Fetch the product data and update the state
    axios.get("http://10.0.2.2:8000/api/recipes").then((response) => {
      console.log(response.data);
      // Filter the products based on kitchen_id
      const filteredProducts = response.data.filter(
        (product: Product) => product.kitchen_id === data?.id
      );
      setProducts(filteredProducts);
    });
  }, [data.id]);
  useEffect(() => {
    // Fetch the product data and update the state
    axios.get("http://10.0.2.2:8000/api/kitchens").then((response) => {
      console.log(response.data);
      setKitchens(response.data);
    });
  }, []);

  return (
    <View>
       {kitchenToShow && (
      <>
        <Kitchenpagecomp key={kitchenToShow.id} FoodItem={kitchenToShow} />
        {/* Other components to render for the specific kitchen */}
      </>
    )}
      <View style={styles.search}>
        <Searchbarcomp />
      </View>
      <View style={styles.parenttypes}>
      </View>
      <View style={styles.parentfoodItems}>
        {products.map((product) => (
          <FoodItem key={product.id} FoodItem={product} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    top: 150,
    width: "115%",
    left: "-9%",
    backgroundColor: "#FFFFFF"
  },
  parentfoodItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    top:"80%"
  },
  parenttypes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    left: "3%",
    top: 222,
    width: "100%",
    backgroundColor: "#4f4"
  }
});

export default Kitchen;
