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
