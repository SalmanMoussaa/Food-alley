import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { NavigationProp, RouteProp } from '@react-navigation/native';
type NewPageProps = {
  navigation: NavigationProp<'MoodTest3'>;
  route: RouteProp<'MoodTest3', { selectedEmoji: string }>;
};

interface Product {
  id: React.Key;
  name:string;
  description: string;
  preparation_time: string;
  price:string;
  kitchen_id:React.Key;
  // Other properties...
}
const MoodTest3 = ({ route }: NewPageProps) => {
  const { selectedEmoji } = route.params;
  const [recipeName, setRecipeName] = useState('');

  
  const navigation = useNavigation();
  const apiKey = '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';
  const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  const [product, setProduct] = useState<Product>({} as Product);


  useEffect(() => {
    axios.get('http://10.0.2.2:8000/api/recipes/names')
      .then(response => {
        // Store the names in a JSON object
        const names = response.data;
        // Do something with the names
        console.log(names);
        // Call the generateSuggestion function with the names and selectedEmoji
        generateSuggestion(names, selectedEmoji);
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });
  }, []);


  const generateSuggestion = async(names: any, selectedEmoji: any) => {
    // Your input to generate the suggestion
    const input = `Given a JSON object representing names: ${JSON.stringify(names)} And an emoji: ${selectedEmoji} Suggest a name from the JSON object that best represents the given emoji, respond only with the name of the suggestion from the names JSON object. 
    AI:`;
      
    // Define the request payload
    const payload = {
      model: 'gpt-3.5-turbo',
      prompt: input,
      temperature: 0.2,
     max_tokens: 1,
      stop: '\n',
      // Add any other required parameters
    };
  
    // Define the headers (replace with the appropriate headers)
    const headers = {
      'Content-Type': 'application/json charset=utf-8',
      Authorization: `Bearer ${apiKey}`,
    };
  
    // Make the POST request to the OpenAI API
    try {
    const response = await axios.post(endpoint, payload, { headers });
     
        // Handle the response from OpenAI API
        const suggestion =response.data.choices[0].text;
        // Do something with the suggestion
        setRecipeName(suggestion);
        getRecipeByName(suggestion)
        console.log(suggestion);
      }
      catch (error) {
        console.error('Failed to generate mood text:', error);
        // Handle error appropriately, e.g., display an error message to the user
      }
  };


    
    
  
  useEffect(() => {
    console.log('Selected Emoji:', selectedEmoji);
    // Do something with the selectedEmoji value
  }, [selectedEmoji]);

  
    const [responseText, setResponseText] = useState('');

    useEffect(() => {
      const generateMoodText = async (selectedEmoji: string) => {

        const prompt= `Imagine you are talking to someone who is feeling ${selectedEmoji}. Write a short, uplifting paragraph (2 lines) to help them understand and embrace their mood. Use words that inspire and bring positivity. Here are some examples to guide you: Example: Feeling ${selectedEmoji} means you are radiating pure joy and happiness. Embrace this vibrant mood, let it light up your world, and share your infectious positivity with everyone you meet. Example: When you're feeling ${selectedEmoji}, it's like a warm hug for your soul. Embrace this comforting mood, let it fill you with peace and contentment, and know that everything is going to be alright.`;
        const data = {
          model: 'gpt-3.5-turbo',
          prompt,
          temperature: 0.5,
          max_tokens: 50,
          frequency_penalty: 1.5,
        };
  
        const headers = {
          'Content-Type': 'application/json charset=utf-8',
          Authorization: `Bearer ${apiKey}`,
        };
  
        try {
          const response = await axios.post(endpoint, data, { headers });
          const generatedText = response.data.choices[0].text;
          const startIndex = generatedText.indexOf(':') + 1;
          const endIndex = generatedText.lastIndexOf('.') + 1;
         const result = generatedText.slice(startIndex, endIndex).trim();
          setResponseText(result);
        } catch (error) {
          console.error('Failed to generate mood text:', error);
          // Handle error appropriately, e.g., display an error message to the user
        }
      };
  
      generateMoodText(selectedEmoji);
    }, [selectedEmoji]);

    const getRecipeByName = async (name: string) => {
      try {
      const response = await axios.get(`http://10.0.2.2:8000/api/recipes?name=${name}`);
      const recipe = response.data;
      // Store the recipe in the product state
      setProduct(recipe);
      } catch (error) {
      console.error('Failed to get recipe:', error);
      // Handle error appropriately, e.g., display an error message to the user
      }
      };
    const handlefinish = () => {
      navigation.dispatch(CommonActions.reset({ index: 0, routes: [] }));
      navigation.navigate("Home");
    };
  return (
    <View style={styles.moodTest3}>
      <View style={styles.productDescriptionProductDeWrapper}>
        <Text
          style={[styles.productDescriptionProduct, styles.productClr]}
        >{responseText}</Text>
      </View>
      <View style={styles.productDescriptionProductDeWrapper}>
        <Text style={[styles.basedOnYour, styles.productClr]}>
          {responseText}
        </Text>
      </View>
      <Text style={[styles.moodResult, styles.finishTypo]}>mood result</Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={ handlefinish}  >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.finish, styles.stakeClr]}>Finish</Text>
      </Pressable>
      <View style={[styles.viewposition]}>
      <Text style={[styles.text, styles.productClr]}>{selectedEmoji}</Text>
      <FoodItem FoodItem={product}/>
     
     </View>
      <Image
        style={styles.arrowLeft3Icon}
        resizeMode="cover"
        source={require("../../../assets/arrow.png")}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewposition:{
    display:"flex",
    top:"15%",
    left:"5%",
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"space-between"

  },
    productClr: {
      color: Color.black,
      textAlign: "left",
    },
    finishTypo: {
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
    },
    groupChildLayout: {
      height: 55,
      width: 216,
      position: "absolute",
    },
    groupPosition: {
      backgroundColor: Color.d9D9D9,
      left: 0,
      top: 0,
    },
    stakeClr: {
      color: Color.wFBase300,
      textAlign: "left",
      position: "absolute",
    },
    groupLayout: {
      height: 164,
      width: 162,
      position: "absolute",
    },
    productDescriptionProduct: {
      fontFamily: FontFamily.interRegular,
      textAlign: "left",
      fontSize: FontSize.size_sm,
      color: Color.black,
      flex: 1,
    },
    productDescriptionProductDeWrapper: {
      top: 382,
      left: 30,
      backgroundColor: Color.gainsboro,
      width: 322,
      flexDirection: "row",
      padding: Padding.p_lg,
      borderRadius: Border.br_3xs,
      position: "absolute",
      overflow: "hidden",
    },
    basedOnYour: {
      fontFamily: FontFamily.itimRegular,
      textAlign: "left",
      fontSize: FontSize.size_sm,
      color: Color.black,
      flex: 1,
    },
    moodResult: {
      top: 345,
      left: 143,
      fontSize: FontSize.size_lg,
      color: Color.darkGray,
      textAlign: "left",
      position: "absolute",
    },
    groupChild: {
      height: 55,
      width: 216,
      position: "absolute",
      borderRadius: Border.br_3xs,
    },
    finish: {
      top: 19,
      left: 86,
      fontSize: FontSize.size_mini,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
    },
    rectangleParent: {
      top: 743,
      left: 84,
    },
    text: {
      
     paddingLeft:"50%",
      fontSize: 128,
      fontFamily: FontFamily.indieFlowerRegular,
      
      
    },
    groupItem: {
      borderRadius: 13,
      backgroundColor: Color.d9D9D9,
      left: 0,
      top: 0,
    },
    groupInner: {
      top: 47,
      left: 29,
      width: 99,
      height: 70,
      borderRadius: Border.br_3xs,
      position: "absolute",
    },
    stake: {
      top: 14,
      left: 41,
      fontSize: FontSize.size_5xl,
      fontWeight: "700",
      fontFamily: FontFamily.interBold,
    },
    americanFood: {
      top: 121,
      left: 11,
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.interExtrabold,
      fontWeight: "800",
    },
    love1Icon: {
      top: 133,
      left: 130,
      width: 24,
      height: 24,
      position: "absolute",
    },
    rectangleGroup: {
      top: 143,
      left: 193,
    },
    arrowLeft3Icon: {
      top: 32,
      left: 23,
      width: 50,
      height: 50,
      position: "absolute",
    },
    moodTest3: {
      backgroundColor: Color.wFBaseWhite,
      width: "100%",
      height: 852,
      overflow: "hidden",
      flex: 1,
    },
  });

export default MoodTest3;
