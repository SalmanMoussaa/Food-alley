import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType } from "react-native";
import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';


const Searchbarcomp = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <Searchbar
    
    style={styles.search}
    textAlign={'left'}
    textAlignVertical="center"
    
    

      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
const styles = StyleSheet.create({
search:{
  display:"flex",
  backgroundColor:"#FFFFFF",
  borderColor:"ef4f",
  borderWidth:2,
  width:"80%",
  alignSelf:"center",
  
  borderRadius:10,
  textAlign:"justify",
  paddingTop:0
  
  
  
  
},

});


export default Searchbarcomp;