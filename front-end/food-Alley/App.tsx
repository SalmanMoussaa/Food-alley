import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/screens/Register/Register";
//import logo from "./assets/logo.png";
import { SplashScreen  } from 'expo-splash-screen';


import Kitchenscomponent from "./src/screens/Register/Register";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      
      </Stack.Navigator>
    
  </NavigationContainer>
  );
}

export default App;
