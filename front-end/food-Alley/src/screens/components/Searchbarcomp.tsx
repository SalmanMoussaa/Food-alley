import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, StyleSheet, FlatList, ListRenderItemInfo, Text } from 'react-native';
import axios from 'axios';
import FoodItem from './FoodItem';
import { Color } from './GlobalStyles';

interface Recipe {
  id: string;
  name: string;
  description: string;
  preparation_time: string;
  price: string;
  kitchen_id: string;
  imguri: string;
  // Other properties...
}

const Searchbarcomp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [showResults, setShowResults] = useState(false);
  const[refresh,setrefresh]= useState(false);

  const fetchRecipes = async (query: string) => {
    setrefresh(true);
    try {
      const response = await axios.get(`http://10.0.2.2:8000/api/recipes/search?query=${query}`);
      const results = response.data;
      console.log(response.data);
      setSearchResults(results);
      setShowResults(true);
      setrefresh(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setShowResults(false);
    } else {
      fetchRecipes(query);
    }
  };

  const renderRecipeItem = ({ item }: ListRenderItemInfo<Recipe>) => {
    return <FoodItem FoodItem={item} />;
  };

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
        <View style={styles.flatlist}>
      {!showResults || searchResults.length === 0 ? (
        <Text>No results found.</Text>
      ) : (
        <FlatList
        
        extraData={searchResults}
        data={searchResults}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id}
        />
        )
        
      }
      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  
  search: {
    backgroundColor: '#FFFFFF',
    borderColor: '#fdc4',
    borderWidth: 2,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    textAlign: 'justify',
    paddingTop: 10,
    position:"absolute"
  },

  flatlist:{
    /* flex:1,

    display:"flex", */
    height:200,
    width:200,
    position:"absolute",
    top:0,
    bottom:0,
    left:0,

  }
  ,
  searchResults: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  container:{
   width:500,
   height:500
  

  }
});

export default Searchbarcomp;