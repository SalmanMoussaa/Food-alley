import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import axios from 'axios';
import FoodItem from './FoodItem';

interface Recipe {
  id: React.Key;
  name: string;
  description: string;
  preparation_time: string;
  price: string;
  kitchen_id: React.Key;
  // Other properties...
}

const Searchbarcomp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  const fetchRecipes = async (searchQuery: string) => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/api/recipes/search?query=${searchQuery}`);
      const results = response.data;
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    fetchRecipes(searchQuery);
  };

  const renderItem = ({ item }: ListRenderItemInfo<Recipe>) => {
    return <FoodItem FoodItem={item} />;
  };

  return (
    <View>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
    paddingTop: 0,
  },
  searchResults: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Searchbarcomp;
