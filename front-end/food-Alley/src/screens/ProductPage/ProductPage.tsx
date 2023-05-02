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
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
const ProductPage = () => {
    const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(undefined);
    const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
    const [frameDropdownValue, setFrameDropdownValue] = useState("");
    const [rectangleTextInput, setRectangleTextInput] = useState();
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
  export default ProductPage; 