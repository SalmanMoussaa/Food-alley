import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { Key, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StyleProp, ViewStyle, ImageStyle, Pressable } from 'react-native';

interface FoodItemProps {
  FoodItem: Product;
}

export interface Product {
  id: Key;
  name: string;
  description: string;
  preparation_time: string;
  price: string;
  kitchen_id: Key;
  imguri: string;
  // Other properties...
}

const FoodItem: React.FC<FoodItemProps> = ({ FoodItem }) => {
  const navigation = useNavigation();
  const [kitchenName, setKitchenName] = useState('');

  useEffect(() => {
    // Fetch the kitchen data for the given kitchen_id
    axios.get(`http://10.0.2.2:8000/api/kitchens/${FoodItem.kitchen_id}`).then((response) => {
      const kitchen = response.data;
      setKitchenName(kitchen.name);
    });
  }, [FoodItem.kitchen_id]);

  console.log(FoodItem.imguri);

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [pressed && { transform: [{ scale: 0.9 }] }]}
        onPress={() => navigation.navigate('ProductPage', { data: FoodItem })}
      >
        <View style={styles.viewcontainer}>
        <Image style={styles.image} source={{ uri: FoodItem.imguri }} />
        <View style={styles.infoContainer}>
          <Text style={styles.foodname}>{FoodItem.name}</Text>
          <Text style={styles.kitchenName}>{kitchenName}</Text>
        </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // marginHorizontal: 20,
    marginTop: "35%",

    width: 180,
    height:170,
    
    borderRadius: 20,
    
   // boxSizing: "border-box",
    backgroundColor: "rgba(254,89,50,0.5)",
  },
  viewcontainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

  },
  infoContainer: {
    //position: "absolute",
    bottom: 25,
    //display: "flex",
    //flexDirection: "column",
    alignItems: "center",
   // width: 117.39,
    //height: 123,
   // boxSizing: "border-box",
  },
  foodname: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    //lineHeight: 24,
    fontFamily: "Inter, sans-serif",
    fontWeight: "800",
  },
  image: {
    //left: 20,
    //top: "5%",
   // marginLeft:"5%",
    bottom:"20%",
    borderRadius: 20,
    width: "85%",
    height: 130,
  //   shadowColor: '#000',
  // shadowOffset: { width: 0, height: 2 },
  // shadowOpacity: 0.5,
  // shadowRadius: 2,
  // elevation: 8,
    
  },
  kitchenName: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    //lineHeight: 24,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
  },
  heartIcon: {
    position: "absolute",
    top: 133,
    left: 130,
    width: 24.13,
    height: 24.13,
  },
});

export default FoodItem;
