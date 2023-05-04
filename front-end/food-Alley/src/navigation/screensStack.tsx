import { createStackNavigator } from "@react-navigation/stack";
import Screen2 from "../screens/home/home";
import Screen4 from "../screens/kitchens/Kitchens";

const Screen2Stack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen 2" component={Screen2} />
      <Stack.Screen name="Screen 4" component={Screen4} />
    </Stack.Navigator>
  );
};

export default Screen2Stack;