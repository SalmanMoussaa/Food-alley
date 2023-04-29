import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Buttons from "./src/screens/components/Button";
import Input from './src/screens/components/Input';
import Svg from './src/screens/components/Svgbottom';
import Search from "./src/screens/components/Searchbarcomp";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        <><Input
        txt='salman'
        label="Phone number"
        
       
      /><Search/>
      <Buttons title="Press me" onPress={() => console.log("salman  vcpressed")} />
     
     <Svg width={393} height={1455} />
      </>
      } 
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
 

  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
