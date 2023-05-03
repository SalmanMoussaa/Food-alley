import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Image, StyleSheet, Pressable, Text, Dimensions, SafeAreaView, ImageSourcePropType } from "react-native";
import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const Searchbarcomp = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const fetchRecipes = async (query: any) => {
    try {
      const response = await fetch(`https://your-api-endpoint.com/recipes?name=${query}`);
      const results = await response.json();
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    fetchRecipes(query);
  };

  return (
    <View>
      <Searchbar
        style={styles.search}
        textAlign={'left'}
        textAlignVertical="center"
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.searchResults}>
        {searchResults.map((recipe) => (
          <Text key={recipe.id}>{recipe.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#FFFFFF",
    borderColor: "ef4f",
    borderWidth: 2,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "justify",
    paddingTop: 0
  },
  searchResults: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});

export default Searchbarcomp;
