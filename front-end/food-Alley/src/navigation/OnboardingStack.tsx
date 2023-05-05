import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screens/Register/Register";
import LoginScreen from "../screens/login/login";
import HomePage from "../screens/home/home";
import Kitchens from "../screens/kitchens/Kitchens";
import Kitchen from "../screens/Kitchen/Kitchen";
import MoodTest from "../screens/Moodtestintro/Moodtestintro";
import MoodTestQuestion from "../screens/moodTestQuestions/Moodtestquest";
import MoodTestresult from "../screens/moodtestResult/TestResult";
import Productpage from "../screens/ProductPage/Productpage";
import SelectLocation from "../screens/SetLocation/Setlocation";


const OnboardingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="kitchens" component={Kitchens} />
      <Stack.Screen name="kitchen" component={Kitchen} />
      <Stack.Screen name="ProductPage" component={Productpage} />
      <Stack.Screen name="Moodtest" component={MoodTest} />
      <Stack.Screen name="Moodtestquestion" component={MoodTestQuestion} />
      <Stack.Screen name="MoodTestresult" component={MoodTestresult} />
      <Stack.Screen name="selectLocation" component={SelectLocation} />







    </Stack.Navigator>
  );
};

export default OnboardingStack;