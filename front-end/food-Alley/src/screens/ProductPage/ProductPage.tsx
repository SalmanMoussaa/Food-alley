import React, { Key, useEffect, useState } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
  View,
  
  TextInput,
  Dimensions,
} from "react-native";
import Checkbox from "react-native-check-box";
import DropDownPicker from "react-native-dropdown-picker";
import { Color, FontFamily, FontSize, Border } from "../components/GlobalStyles";
import { TextInput as RNTextInput } from 'react-native-paper';
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import FoodItem from "../components/FoodItem";
interface Productpage {
  Productpage:Product;
  }
   interface Product {
    id: Key;
    name:string;
    description: string;
    preparation_time: string;
    price:string;
    kitchen_id:Key;
    // Other properties...
  }
const Productpage=(props: Productpage) => {
  const { id } = props;
    const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(true);
    const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
    const [frameDropdownValue, setFrameDropdownValue] = useState("");
    const [rectangleTextInput, setRectangleTextInput] = useState("salman");
     const [frameDropdownItems, setFrameDropdownItems] = useState([
        { value: "Beirut", label: "Beirut" },
        { value: "lebanon", label: "lebanon" },
        { value: "Beirut", label: "Beirut" },
    ]);
    const [productInfo, setProductInfo] = useState<Product | null>(null);

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as { id: React.Key };
    const productId = Productpage.id;

useEffect(() => {
  // Fetch the product data using the product ID
  axios.get(`http://10.0.2.2:8000/api/recipes/${productId}`)
    .then((response) => {
          console.log(response.data); // Add this line

      setProductInfo(response.data);
    })
    .catch((error) => {
      console.error("Error fetching product information:", error);
    });
}, [productId]);
  console.log(productId);
  
    return (
      <ScrollView style={styles.productPage} contentContainerStyle={styles.productPageScrollViewContent}>
     
  <View style={styles.vectorParent}>
    {/* Display the product information */}
    <Text style={[styles.filterByAllergy, styles.americanFlexBox]}>filter by allergy</Text>
    <Text style={[styles.americanCheeseBurger, styles.americanFlexBox]}>{productInfo.name}</Text>
    <Text style={[styles.text, styles.americanFlexBox]}>{productInfo.price}$</Text>
          <ImageBackground
            style={[styles.arrowLeft5Wrapper, styles.frameChildPosition]}
            resizeMode="cover"
            source={require("../../../assets/Frame26.png")}
          >
            <Pressable
              style={styles.arrowLeft5}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/arrow.png")}
              />
            </Pressable>
          </ImageBackground>
          <View
            style={[
              styles.theAmericanCheeseburgerIsAWrapper,
              styles.vectorGroupLayout,
            ]}
          >
            <Text
              style={[styles.theAmericanCheeseburger, styles.americanFlexBox]}
            >
              The American cheeseburger is a classic fast-food staple, featuring a
              juicy beef patty, melted American cheese, and a variety of toppings
              on a toasted bun, making it a beloved and iconic American dish.
            </Text>
          </View>
          <View style={[styles.vectorGroup, styles.vectorGroupLayout]}>
            <Image
              style={[styles.frameItem, styles.rectangleLayout]}
              resizeMode="cover"
              source={require("../../../assets/Rectangle35.png")}
            />
            <Checkbox
  style={styles.frameInner}
  checked={frameCheckboxchecked}
  onChange={(isChecked: boolean | ((prevState: boolean) => boolean)) => setFrameCheckboxchecked(isChecked)}
/>
          </View>
          <Text style={[styles.removeIngredient, styles.americanFlexBox]}>
            remove ingredient
          </Text>
          <View style={[styles.wrapper, styles.rectangleLayout]}>
          <DropDownPicker
             style={styles.dropdownpicker}
               open={frameDropdownOpen}
            items={frameDropdownItems}
             setOpen={setFrameDropdownOpen}
              value={frameDropdownValue}
              setValue={setFrameDropdownValue}
              placeholder="allergy name"
                labelStyle={styles.frameDropdownValue}
             dropDownContainerStyle={styles.frameDropdowndropDownContainer}
/>

          </View>
          
          <RNTextInput
  style={[styles.rectangleRnktextinput, styles.rectangleLayout]}
  placeholder="Place your text"
  value={rectangleTextInput}
  onChangeText={(text) => setRectangleTextInput(text)}
/>

          <Text style={[styles.specialInstructions, styles.americanFlexBox]}>
            special instructions
          </Text>
          <Pressable
            style={[styles.rectanglePressable, styles.rectangleLayout]}
          />
          <Text style={[styles.addToCart, styles.addToCartTypo]}>
            Add to Cart
          </Text>
        </View>
      
          
       
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    frameDropdownValue: {
      color: "#e2e7f0",
      fontSize: 16,
      fontWeight: "800",
      fontFamily: "Inter_extrabold",
    },
    frameDropdowndropDownContainer: {
      backgroundColor: "#fe5932",
    },
    productPageScrollViewContent: {
      flexDirection: "row",
    },
    frameChildPosition: {
      left: 0,
      width:Dimensions.get("window").width,

      position: "absolute",
    },
    americanFlexBox: {
      textAlign: "left",
      color: Color.darkGray,
    },
    vectorGroupLayout: {
      width: 358,
      position: "absolute",
    },
    rectangleLayout: {
      width: 355,
      position: "absolute",
    },
    addToCartTypo: {
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      position: "absolute",
    },
    frameChild: {
      top: 393,
      height: 877,
    },
    filterByAllergy: {
      top: 903,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      position: "absolute",
      fontSize: FontSize.size_lg,
      color: Color.darkGray,
      left: 20,
    },
    americanCheeseBurger: {
      top: 409,
      fontSize: FontSize.size_5xl,
      width: 293,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      position: "absolute",
      left: 20,
    },
    text: {
      top: 444,
      fontFamily: FontFamily.interRegular,
      opacity: 0.5,
      fontSize: FontSize.size_base,
      left: 20,
      position: "absolute",
    },
    icon: {
      height: "100%",
      width: "100%",
    },
    arrowLeft5: {
      left: 14,
      top: 29,
      width: 50,
      height: 50,
      position: "absolute",
    },
    arrowLeft5Wrapper: {
      height: 393,
      top: 0,
    },
    theAmericanCheeseburger: {
      fontFamily: FontFamily.itimRegular,
      fontSize: FontSize.size_base,
      flex: 1,
    },
    theAmericanCheeseburgerIsAWrapper: {
      top: 479,
      backgroundColor: Color.wFBase400,
      flexDirection: "row",
      padding: 18,
      borderRadius: Border.br_3xs,
      left: 19,
      overflow: "hidden",
    },
    frameItem: {
      left: -7,
      height: 220,
      borderRadius: Border.br_3xs,
      top: 0,
    },
    frameInner: {
      top: 24,
      left: 20,
      position: "absolute",
    },
    vectorGroup: {
      top: 660,
      left: 21,
      height: 220,
    },
    removeIngredient: {
      top: 624,
      left: 19,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      position: "absolute",
      fontSize: FontSize.size_lg,
      color: Color.darkGray,
    },
    dropdownpicker: {
      backgroundColor: "#FE5932",
    },
    wrapper: {
      top: 941,
      borderRadius: 14,
      height: 45,
      left: 19,
    },
    rectangleRnktextinput: {
      top: 1041,
      borderRadius: Border.br_3xs,
      left: 19,
      backgroundColor: "#FFFF",
    },
    specialInstructions: {
      top: 1012,
      left: 19,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      position: "absolute",
      fontSize: FontSize.size_lg,
      color: Color.darkGray,
    },
    rectanglePressable: {
      top: 1170,
      backgroundColor: Color.darkGray,
      borderRadius: Border.br_3xs,
      left: 19,
      height: 50,
    },
    addToCart: {
      top: 1185,
      left: 151,
      color: Color.wFBase300,
      textAlign: "center",
      fontSize: FontSize.size_base,
    },
    vectorParent: {
      height: 1270,
      width: 393,
    },
    productPage: {
      overflow: "hidden",
      width: "100%",
      flex: 1,
      backgroundColor: "#FFFF",
    },
  });
  
  export default Productpage; 