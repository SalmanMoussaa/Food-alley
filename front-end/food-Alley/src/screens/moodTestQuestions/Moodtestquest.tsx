import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable ,Image} from 'react-native';
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';
import { Border, Color, FontFamily, FontSize } from '../components/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

  


function MoodTestPage1({ navigation }: { navigation: NavigationProp<'Login'> }) {
  const [question, setQuestion] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
 
  const storeResult = async (result: string) => {
    try {
      await AsyncStorage.setItem('moodTestResult', result);
    } catch (error) {
      console.log(error);
    }
  };
  const data = {
    model: 'text-davinci-003',
    prompt:`generate me a question that tell the mood of the person be crestive with your question`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['\n'],
  };
  
useEffect(() => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
  };
  
  axios
    .post('https://api.openai.com/v1/completions', data, config)
    .then((response) => {
      console.log(response.data.choices[0].text);
      setQuestion(response.data.choices[0].text);
    })
    .catch((error) => {
      console.error('Failed to generate text:', error);
    });



     

      // set the first generated question as the current question
      
    

  

});

   

  const handleNext = () => {
      navigation.navigate('Result', { answer:selectedEmoji});
     };
    
  return (
    <View style={styles.moodTest2}>
      <Text style={styles.howAreYouContainer}>{question} </Text>
      <Text style={styles.mood}>Mood ?</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout1]} onPress={() => navigator.goBack()}>
  <View style={[styles.frameChild, styles.frameChildBg]} />
  <Text style={[styles.back, styles.backTypo]}>back</Text>
</Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={[styles.frameChild, styles.frameChildBg]} />
        <Text style={[styles.next, styles.backTypo]}>next</Text>
      </Pressable>
      <TouchableOpacity
  style={styles.vectorParent}
  activeOpacity={0.2}
  onPress={() => {
    setSelectedEmoji("😊");
    storeResult("😊");
  }}
>
  <Image
    style={[styles.frameInner, styles.rectangleLayout]}
    resizeMode="cover"              
    source={require("../../../assets/emojibacground.png")}
  />
  <Text style={[styles.text, styles.textTypo1]}> 😊</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[styles.rectangleContainer, styles.rectangleLayout]}
  activeOpacity={0.2}
  onPress={() => {
    setSelectedEmoji("😔");
    storeResult("😔");
  }}
  
>
  <View style={[styles.rectangleView, styles.rectangleLayout]} />
  <Text style={[styles.text1, styles.textTypo1]}> 😔</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[styles.frameTouchableopacity, styles.rectangleParent1Position]}
  activeOpacity={0.2}
  onPress={() => {
    setSelectedEmoji("😫")  
      storeResult("😫");
  }}
  
>
  <View style={[styles.rectangleView, styles.rectangleLayout]} />
  <Text style={[styles.text2, styles.textTypo]}> 😫</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[styles.rectangleParent1, styles.rectangleParent1Position]}
  activeOpacity={0.2}
  onPress={() => {
    setSelectedEmoji("😠")  
      storeResult("😠");
  }}
>
  <View style={[styles.rectangleView, styles.rectangleLayout]} />
  <Text style={[styles.text3, styles.textTypo]}> 😠</Text>
</TouchableOpacity>
     
      
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ffff",
    height:"100%"

  },
  questionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  questionContainer: {
    marginBottom: 24,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  answerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  answerOption: {
    backgroundColor: '#ccc',
    borderRadius: 24,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 24,
    width: 120,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 16,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },rectangleLayout1: {
    height: 49,
    top: 726,
    width: 151,
    position: "absolute",
  },
  frameChildBg: {
    backgroundColor: Color.d9D9D9,
    top: 0,
  },
  backTypo: {
    fontSize: FontSize.size_13xl,
    top: 2,
    left: 44,
    textAlign: "left",
    fontFamily: FontFamily.indieFlowerRegular,
    position: "absolute",
  },
  rectangleLayout: {
    height: 134,
    width: 151,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    position: "absolute",
  },
  rectangleParent1Position: {
    top: 448,
    height: 134,
    width: 151,
    position: "absolute",
  },
  textTypo: {
    top: 35,
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    position: "absolute",
  },
  howAreYouContainer: {
    top: 116,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    width: 365,
    height: 32,
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    left: 20,
    position: "absolute",
  },
  mood: {
    top: 148,
    left: 137,
    fontSize: 40,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.d9D9D9,
    top: 0,
    height: 49,
    width: 151,
    position: "absolute",
  },
  back: {
    color: Color.wFBase900,
  },
  rectangleParent: {
    left: 20,
  },
  next: {
    color: Color.darkGray,
  },
  rectangleGroup: {
    left: 224,
  },
  frameInner: {
    top: 33,
    borderRadius: Border.br_15xl,
    height: 134,
    left: 0,
  },
  text: {
    width: 41,
    height: 33,
    left: 44,
    fontSize: FontSize.size_45xl,
    top: 0,
  },
  vectorParent: {
    top: 261,
    height: 167,
    left: 36,
    width: 151,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_15xl,
    height: 134,
    left: 0,
    backgroundColor: Color.d9D9D9,
    top: 0,
  },
  text1: {
    top: "-45%",
    width: 97,
    left: "23%",  },
  rectangleContainer: {
    top: 294,
    left: 207,
  },
  text2: {
    top: "75%",
    width: 97,
    left: "13%",
  },
  frameTouchableopacity: {
    left: 36,
  },
  text3: {
    left: 27,
  },
  rectangleParent1: {
    left: 207,
  },
  arrowLeft4Icon: {
    top: 37,
    width: 50,
    height: 50,
    left: 20,
    position: "absolute",
  },
  moodTest2: {
    backgroundColor: Color.wFBaseWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});
export default MoodTestPage1;
