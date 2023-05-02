import React, { useState } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
  View,
} from "react-native";
import {
  CheckBox as RNKCheckBox,
  Input as RNKTextInput,
} from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../components/GlobalStyles";
const ProductPage = () => {
    const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(true);
    const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
    const [frameDropdownValue, setFrameDropdownValue] = useState("");
    const [rectangleTextInput, setRectangleTextInput] = useState();
    const [frameDropdownItems, setFrameDropdownItems] = useState([
        { value: "Beirut", label: "Beirut" },
        { value: "lebanon", label: "lebanon" },
        { value: "Beirut", label: "Beirut" },
    ]);
    const navigation = useNavigation();
  
    return (
      <ScrollView
        style={styles.productPage}
        horizontal
        contentContainerStyle={styles.productPageScrollViewContent}
      >
        <View style={styles.vectorParent}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-32.png")}
          />
          <Text style={[styles.filterByAllergy, styles.americanFlexBox]}>
            filter by allergy
          </Text>
          <Text style={[styles.americanCheeseBurger, styles.americanFlexBox]}>
            American cheese burger
          </Text>
          <Text style={[styles.text, styles.americanFlexBox]}>60$</Text>
          <ImageBackground
            style={[styles.arrowLeft5Wrapper, styles.frameChildPosition]}
            resizeMode="cover"
            source={require("../assets/frame26.png")}
          >
            <Pressable
              style={styles.arrowLeft5}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrowleft-5.png")}
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
              source={require("../assets/rectangle-35.png")}
            />
            <RNKCheckBox
              style={styles.frameInner}
              checked={frameCheckboxchecked}
              onChange={() => setFrameCheckboxchecked(!frameCheckboxchecked)}
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
              placeholder="allergy  name  "
              labelStyle={styles.frameDropdownValue}
              dropDownContainerStyle={styles.frameDropdowndropDownContainer}
              
            />
          </View>
          <RNKTextInput
            style={[styles.rectangleRnktextinput, styles.rectangleLayout]}
            placeholder="Place your text"
            value={rectangleTextInput}
            onChangeText={setRectangleTextInput}
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
      position: "absolute",
      width: 393,
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
      backgroundColor: Color.tomato,
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
      backgroundColor: Color.white,
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
      backgroundColor: Color.white,
    },
  });
  
  export default ProductPage; 