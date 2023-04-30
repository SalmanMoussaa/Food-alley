import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/login/login";
import logo from "./assets/logo.png";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Login"
          component={Login}
        
        />
        <Stack.Screen name="Signin" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
