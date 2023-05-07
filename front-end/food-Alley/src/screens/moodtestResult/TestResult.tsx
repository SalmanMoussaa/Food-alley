import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../components/GlobalStyles";
import FoodItem from "../components/FoodItem";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface Product {
  id: React.Key;
  name:string;
  description: string;
  preparation_time: string;
  price:string;
  kitchen_id:React.Key;
  // Other properties...
}
const MoodTest3 = () => {
  const navigation = useNavigation();

  
  
    const [responseText, setResponseText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AsyncStorage.getItem('moodTestResult');
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
          prompt: 'based on this emoji results '+ result+' give me a a well fromed paragraph talking about the mood of the user, dont talk in general be specific about this day and tell him at the end that food is important for changing mood ' ,
          max_tokens: 50,
          n: 3,
          stop: ['Q:'],
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'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'}`,
          },
        });
        setResponseText(response.data.choices[0].text);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [responseText]);

       
  return (
    <View style={styles.moodTest3}>
      <View style={styles.productDescriptionProductDeWrapper}>
        <Text
          style={[styles.productDescriptionProduct, styles.productClr]}
        >{`product description product description product description product description product description product description product description `}</Text>
      </View>
      <View style={styles.productDescriptionProductDeWrapper}>
        <Text style={[styles.basedOnYour, styles.productClr]}>
          {responseText}
        </Text>
      </View>
      <Text style={[styles.moodResult, styles.finishTypo]}>mood result</Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={() =>   navigation.navigate("Home")}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.finish, styles.stakeClr]}>Finish</Text>
      </Pressable>
      <View style={[styles.viewposition]}>
      <Text style={[styles.text, styles.productClr]}>😫</Text>
     
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
