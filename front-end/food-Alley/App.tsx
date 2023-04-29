import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Buttons from "./src/screens/components/Button";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
      <Buttons title="Press me" onPress={() =>console.log("salman  vcpressed")} />
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
