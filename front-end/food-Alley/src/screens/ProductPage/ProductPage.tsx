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
import DropDownPicker from "react-native-dropdown-picker";
import { Color, FontFamily, FontSize, Border } from "../components/GlobalStyles";
import { TextInput as RNTextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import FoodItem from "../components/FoodItem";
import Checkbox from "../components/Checkbox";

const Productpage=({route}) => {
  const { data } = route.params;
  const [orderData, setOrderData] = useState({
    recepie_id: data.id,
    // add other order details here
  });

  
    const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(true);
    const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
    const [frameDropdownValue, setFrameDropdownValue] = useState("");
    const [rectangleTextInput, setRectangleTextInput] = useState("salman");
     const [frameDropdownItems, setFrameDropdownItems] = useState([]);
    const [productInfo, setProductInfo] = useState([]);
    const [ingredientData, setIngredientData] = useState<Array<{ name: string, checked: boolean }>>([]);


    const navigation = useNavigation();
    //const routeParams = route.params as { id: React.Key };
   // const productId = id;
   useEffect(() => {
    // Fetch the list of allergies from the server
    axios
      .get("http://10.0.2.2:8000/api/allergies")
      .then((response) => {
        // Extract the allergy names from the response data
        const allergyNames = response.data.map((allergy: { name: any; }) => allergy.name);

        // Transform the allergy names into dropdown items format
        const dropdownItems = allergyNames.map((name: any) => ({
          value: name,
          label: name,
        }));

        // Update the dropdown items state
        setFrameDropdownItems(dropdownItems);
      })
      .catch((error) => {
        console.error("Error fetching allergies:", error);
      });
  }, []);
   const addToCart = () => {
    axios.post('http://10.0.2.2:8000/api/order_items', orderData)
      .then((response) => {
        console.log('Order added:', response.data);
        // add code to handle successful response here
      })
      .catch((error) => {
        console.error('Error adding order:', error);
        console.log(orderData)
        // add code to handle error here
      });
  };


useEffect(() => {
  // Fetch the product data using the product ID
  axios.get(`http://10.0.2.2:8000/api/recipes/${data?.id}`)
    .then((response) => {
          console.log(response.data); // Add this line

      setProductInfo(response.data);
    })
    .catch((error) => {
      console.error("Error fetching product information:", error);
    });
}, [/* productId */]);
  //console.log(productId);
  
  useEffect(() => {
    // Fetch the product data using the product ID
    axios.get(`http://10.0.2.2:8000/api/recipe-ingredients/${data?.id}`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const ingredients = response.data.map((ingredient: { ingredient_name: string; }) => ({
            name: ingredient.ingredient_name.trim(),
            checked: false,
          }));
          setIngredientData(ingredients);

          // Check the extracted ingredient names in the console
        } else {
           // Set the error state to indicate no data
        }
      })
      .catch((error) => {
        console.error("Error fetching product information:", error);
      });
  }, [/* productId */]);
  const handleCheckboxChange = (index: number, checked: any) => {
    const updatedIngredientData = [...ingredientData];
    updatedIngredientData[index].checked = checked;
    setIngredientData(updatedIngredientData);
  };
 
  
    return (
      <ScrollView style={styles.productPage} contentContainerStyle={styles.productPageScrollViewContent}>
     
  <View style={styles.vectorParent}>
    {/* Display the product information */}
    <Text style={[styles.filterByAllergy, styles.americanFlexBox]}>filter by allergy</Text>
    <Text style={[styles.americanCheeseBurger, styles.americanFlexBox]}>{data?.name}</Text>
    <Text style={[styles.text, styles.americanFlexBox]}>{data?.price}</Text>
    <ImageBackground
            style={[styles.arrowLeft5Wrapper, styles.frameChildPosition]}
            resizeMode="cover"
            source={{uri:data?.imguri}}
          >
            <Pressable
              style={styles.arrowLeft5}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/arrow.png")} />
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
              {data?.descreption}
            </Text>
          </View>
          <View style={[styles.vectorGroup, styles.vectorGroupLayout]}>
            <Image
              style={[styles.frameItem, styles.rectangleLayout]}
              resizeMode="cover"
              source={require("../../../assets/Rectangle35.png")}
            />
           {ingredientData.map((ingredient, index) => (
  <Checkbox
    key={index}
    label={ingredient.name}
    onChange={(checked: any) => handleCheckboxChange(index, checked)}
  />
))}
          </View>
          <Text style={[styles.removeIngredient, styles.americanFlexBox]}>
            remove ingredient
          </Text>
          <View style={[styles.wrapper, styles.rectangleLayout]}>
          
  <DropDownPicker
    items={frameDropdownItems}
    open={frameDropdownOpen}
    setOpen={setFrameDropdownOpen}
    value={frameDropdownValue}
    setValue={setFrameDropdownItems}
    placeholder="Select an allergy"
    badgeColors={Color.black}
    textStyle={styles.frameDropdownText}
    dropDownContainerStyle={styles.frameDropdowndropDownContainer}
    labelStyle={styles.frameDropdownValue}
    scrollViewProps={{ persistentScrollbar: true }}

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
            onPress={addToCart}
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
      color: Color.d9D9D9,
      fontSize: 20,
      fontWeight: "800",
      fontFamily: "Inter_extrabold",
    },
    frameDropdowndropDownContainer: {
      backgroundColor: "#fe32",
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
    frameDropdownText: {
    
    
      color: Color.d9D9D9,
      fontSize: 14,
      fontWeight: "800",
      fontFamily: "Inter_extrabold",
    },
    rectangleLayout: {
      width: "100%",
      left: "3%",
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
      top: "74%",
      width:"60%",
      left:"4%",
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