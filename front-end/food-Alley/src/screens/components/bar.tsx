import * as React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Border, Color } from "./GlobalStyles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Entypo ,MaterialIcons } from '@expo/vector-icons';
const Bar = () => {
  const navigation = useNavigation()

  const handleMoodtestPress = () => {
    // Handle moodtest button press here
  };

  const handleSettingsPress = () => {
    // Handle settings button press here
  };
  const handleMenuPress = () => {
    // Handle settings button press here
  };
  const handleHomePress = () => {
    // Handle settings button press here
  };

  return (
    <View style={styles.bar}>
<Entypo name="home" size={28} color="white" onPress={() =>navigation.navigate("Home")} />
<MaterialIcons name="menu-book" size={30} color="white" onPress={() => navigation.navigate("kitchens")} />
<MaterialIcons name="emoji-emotions" size={30} color="white"  onPress={() => navigation.navigate("Moodtest")}/>


      
    
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
   
    //top:"3%",
  
    //position: "absolute",
  },
  /* barChild: {
    
    left: 0,
    
    width: "100%",
    height: 75,
    //top:"-30%",
    position: "absolute",
  }, */
  homeIcon: {
   // left: "15%",
    borderRadius: Border.br_20xl,
    //top:"30%",
    height: 40,
    width: 40,
    
  },
  menuIcon:{
    //left: "45%",
    height: 40,
    width: 40,
    
  },
  moodtestIcon: {
    //left: "75%",
    height: 40,
    width: 40,
  },
  
  bar: {
    display:"flex",
    justifyContent:"space-around",
    flexDirection:"row",


    width: "100%",
    top:"93%",
    height: 65,
    paddingTop:"3%",
    backgroundColor:"rgba(51,51,51,0.8)",

    position:"absolute"
  },
});

export default Bar;
