import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/screens/Register/Register";
import logo from "./assets/logo.png";
import Kitchenscomponent from "./src/screens/components/kitchenpagecomp";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Login"
          component={Kitchenscomponent}
        
        />
        <Stack.Screen name="Signin" component={Kitchenscomponent} />
  </Stack.Navigator>
  
       

    </NavigationContainer>
  );
}

export default App;
