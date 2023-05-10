import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import Searchbarcomp from "../components/Searchbarcomp";
import Discount from "../components/Discount";
import Bar from "../components/bar";
import Kitchenscomponent from "../components/Kitchenscomponent";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

interface Kitchen {
  id: number;
  name: string;
  slang: string;
  imguri: string;
}

const Kitchens = (Kitchen) => {
  const navigation  = useNavigation();
  const [kitchens, setKitchens] = useState<Kitchen[]>([]);

  useEffect(() => {
    // Fetch the product data and update the state
    axios.get("http://10.0.2.2:8000/api/kitchens").then((response) => {
      console.log(response.data);
      setKitchens(response.data);
    });
  }, []);

  return (
    <View style={styles.kitchenPage}>
      <View style={[styles.ellipseParent, styles.frameItemLayout]}>
        <Pressable style={styles.frameChild}>
          <Image resizeMode="cover" source={require("../../../assets/Ellipse2.png")} />
        </Pressable>
        <View style={styles.search}>
          <Searchbarcomp />
        </View>
      </View>
      <View>
        <Image style={[styles.kitchensIcon]} resizeMode="cover" source={require("../../../assets/kitchens.png") as ImageSourcePropType} />
      </View>
      <View style={styles.kitchenPageComp}>
        {kitchens.map((kitchen) => (
          <Pressable onPress={() => navigation.navigate("kitchen", { data: { id:  kitchen.id} })}>
          <Kitchenscomponent key={kitchen.id} FoodItem={kitchen} />
          </Pressable>
          
        ))}
      </View>
      <Bar />
    </View>
  );
};

const styles = StyleSheet.create({
  kitchenPage: {
    backgroundColor: Color.wFBaseWhite,
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  kitchenPageComp: {
    display: "flex",
    flex: 0.5,
    flexDirection: "column",
    alignContent: "space-between",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
    top: "15%",
    left: "1%"
  },
  kitchensIcon: {
    top: "250%",
    width: "40%",
    left: "1%"
  },
  search: {
    top: "75%",
    width: 349,
    left: 24
  },
  ellipseParent: {
    top: 0,
    width: "100%",
    left: 0
  },
  frameChild: {
    top: "80%",
    left: "85%",
    width: 50,
    height: 50,
    position: "absolute"
  },
  frameItemLayout: {
    height: 40,
    position: "absolute"
  }
});

export default Kitchens;
