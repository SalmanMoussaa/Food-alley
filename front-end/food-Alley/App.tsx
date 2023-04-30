import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/login/login";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Register"
          component={Login}
        
        />
        <Stack.Screen name="Signin" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
