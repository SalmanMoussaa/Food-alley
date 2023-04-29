import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Buttons from "./src/screens/components/Button";
import Input from './src/screens/components/Input';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        <><Input
        txt='salman'
        label="Phone number"
        
       
      /><Buttons title="Press me" onPress={() => console.log("salman  vcpressed")} /></>
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
