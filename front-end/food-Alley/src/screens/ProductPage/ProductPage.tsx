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
import { Color, FontFamily, FontSize, Border, Padding } from "../components/GlobalStyles";
import { TextInput as RNTextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import FoodItem from "../components/FoodItem";
import Checkbox from "../components/Checkbox";
import { Dropdown } from 'react-native-element-dropdown';


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
        if (response.data && response.data.ingredients.length > 0) {
          const ingredients = response.data.ingredients.map((ingredient: { ingredient_name: string; }) => ({
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
            <Pressable
              style={styles.arrowLeft5}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/arrow.png")} />
            </Pressable>
    <Text style={styles.americanCheeseBurger}>{data?.name}</Text>
    <Image
            style={styles.arrowLeft5Wrapper}
            resizeMode="cover"
            source={{uri:data?.imguri}}
          />
    {/* Display the product information */}
    <Text style={styles.details}>Details</Text>
    <Text style={[styles.text]}>{data?.price}</Text>
            <Text
              style={[styles.theAmericanCheeseburger]}
            >
              {data?.descreption}
            </Text>
            <View style={styles.removeView}>
          <Text style={styles.removeIngredient}>
            Remove Ingredient
          </Text>
    {ingredientData.map((ingredient, index) => (    
      <Checkbox
      key={index}
      label={ingredient.name}
      onChange={(checked: any) => handleCheckboxChange(index, checked)}
      />
      ))}
      </View>
          
    
      <Text style={styles.filter}>Filter by Allergy</Text>
      <View style={[ styles.rectangleLayout]}>
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
           {/*  <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              valueField="value"

              setValue={setFrameDropdownItems}
              
              placeholder="Select an allergy"
              searchPlaceholder="Search..."
              // setOpen={setFrameDropdownOpen}
              value={frameDropdownValue} 
              onChange={item => {
                setValue(item.value)
                
              }}
              />
   */}
  
            </View>
          <Text style={[styles.specialInstructions]}>
            Special Instructions
          </Text>
          <TextInput
  style={styles.rectangleRnktextinput}
  placeholder="Place your text"
  value={rectangleTextInput}
  onChangeText={(text) => setRectangleTextInput(text)}
/>

          <Pressable
            style={styles.rectanglePressable}
            onPress={addToCart}
          >
          <Text style={[styles.addToCart]}>
            Add to Cart
          </Text>
          </Pressable>
          {/* <View
            style={[
              styles.theAmericanCheeseburgerIsAWrapper,
              styles.vectorGroupLayout,
            ]}
            >
          </View>
          <View style={[styles.vectorGroup, styles.vectorGroupLayout]}>
            <Image
              style={[styles.frameItem, styles.rectangleLayout]}
              resizeMode="cover"
              source={require("../../../assets/Rectangle35.png")}
            />
          </View>
           */}

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
    filter:{
      top: "14%",
      left:"5%",
      fontSize: 26,
     // width: 293,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "700",
      paddingBottom:"5%"

    },
    removeView:{
      display:"flex",
      flexDirection:"column",
      left:"5%",
      top:"14%"

    },
    details:{
      top: "12%",
      left:"5%",
      fontSize: 26,
     // width: 293,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "700",
      paddingBottom:"5%"


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
      top:"15%",
      width: "100%",
      left: "5%",
      padding:20,
      

      
     // position: "absolute",
    },
    addToCartTypo: {
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
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
      top: "8%",
      left:"5%",
      fontSize: 32,
     // width: 293,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
      //position: "absolute",

      //backgroundColor:Color.black,
      //left: 20,
    },
    text: {
      top: "12%",
      fontFamily: FontFamily.interRegular,
      opacity: 0.5,
      fontSize: FontSize.size_base,
      left: "5%",
     // position: "absolute",
    },
    icon: {
      left: "5%",
      top: "6%",
      width: 60,
      height: 60,
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
      top: "10%",
      left:"5%",
      borderRadius:25

    },
    theAmericanCheeseburger: {
      
      fontFamily: FontFamily.itimRegular,
      fontSize: FontSize.size_base,
      top:"13%",
      left:"5%",
    },
    theAmericanCheeseburgerIsAWrapper: {
      
      
      flexDirection: "row",
     // padding: 18,
     // borderRadius: Border.br_3xs,
     // left: 19,
      //overflow: "hidden",
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
     // top: "",
      //left: "5%",
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "700",
      fontSize: 26,
      paddingBottom:"5%"
      
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
      height: 55,
      width: "100%",
      borderRadius:10,
      backgroundColor:"#edf0f7",
      left:"5%",
      paddingLeft:"5%",
      top:"17%"
    },
    specialInstructions: {
      top: "16%",
      left:"5%",
      fontSize: 26,
     // width: 293,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "700",
      paddingBottom:"5%"
    },
    rectanglePressable: {
      top: "22%",
      backgroundColor: Color.darkGray,
      borderRadius: 30,
      left: "5%",
      height: 50,
    },
    addToCart: {
      paddingTop: "3%",
      /*
      left: 151, */
      color: Color.wFBase300,
      textAlign: "center",
      fontWeight:700,
      fontSize: 20,
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
   /*  container: {
      backgroundColor: 'white',
      padding: 16,
    }, */
   /*  dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    }, */
  });
  
  export default Productpage; 