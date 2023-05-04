import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/screens/Register/Register";
import Login from"./src/screens/login/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//import logo from "./assets/logo.png";

import Kitchenscomponent from "./src/screens/Register/Register";
import HomePage from "./src/screens/home/home";
import Kitchens from "./src/screens/kitchens/Kitchens";
import MoodTestPage1 from "./src/screens/moodTestQuestions/Moodtestquest";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer> 
     <Stack.Navigator> 
        <Stack.Screen name="Login" component = {Login} /> 
        <Stack.Screen name="Register" component = {Register} /> 
        <Stack.Screen name="Home" component = {HomePage} /> 
        <Stack.Screen name="Menu" component = {Kitchens} /> 
        <Stack.Screen name="MoodTest" component = {MoodTestPage1} /> 

        


       </Stack.Navigator> 
    </NavigationContainer> 
  );
}

export default App;
