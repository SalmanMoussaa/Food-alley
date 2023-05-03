import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/screens/ProductPage/Productpage";
import Login from"./src/screens/login/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//import logo from "./assets/logo.png";

import Kitchenscomponent from "./src/screens/Register/Register";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer> 
     <Stack.Navigator> 
        <Stack.Screen name="Login" component = {Login} /> 
        <Stack.Screen name="Register" component = {Register} /> 
       </Stack.Navigator> 
    </NavigationContainer> 
  );
}

export default App;
