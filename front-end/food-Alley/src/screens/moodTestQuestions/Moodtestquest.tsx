import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable ,Image} from 'react-native';
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';
import { Border, Color, FontFamily, FontSize } from '../components/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Configuration, OpenAIApi } from 'openai';

  


function MoodTestPage1({ navigation }: { navigation: NavigationProp<'Login'> }) {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [question, setQuestion] = useState('');
  const [generatedQuestions, setGeneratedQuestions] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(0);


  useEffect(() => {
    generateQuestion();
  }, []); 

      
        const generateQuestion = async () => {
          const data = {
            model: 'gpt-3.5-turbo',
            prompt: "Imagine you are talking to a person who can only respond with emojis. Generate a question that will make them think deeply about their current mood. Be creative and avoid providing explicit emoji options. Here are some examples to inspire you: Example: If your mood were a sunrise, which emoji would best represent it?  Example: Describe your current mood using an emoji combination that symbolizes a magical adventure.  Example: Imagine your mood as a color palette of emojis. How would you arrange them to reflect your emotions right now? Example: If your mood were a weather condition, which emoji would capture its essence?  Example: Choose an emoji that represents your mood and explain why you resonate with it.",
            temperature: 0.5,

            max_tokens: 25,
           
            frequency_penalty: 1.5,
          };
    
          const headers = {
            'Content-Type': 'application/json charset=utf-8',
            Authorization: 'Bearer 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',
          };
    
          try {
             const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', data, { headers });
            const generatedQuestion =response.data.choices[0].text.trim();
            const startIndex = generatedQuestion.indexOf(':') + 1;
  const endIndex = generatedQuestion.lastIndexOf('?') + 1;
  const question = generatedQuestion.slice(startIndex, endIndex).trim();

  console.log(response.data);
  console.log('Generated Question:', question);
  setQuestion(question);
          
            console.log(response.data);
            console.log('Generated Question:', question);
            setQuestion(question);
            if (generatedQuestions.includes(question)) {
              // If the question is a duplicate, generate a new question
              generateQuestion();
            } else {
              setGeneratedQuestions([...generatedQuestions, question]);
              setQuestion(question);
              setQuestionCount(questionCount + 1);

              if (questionCount >= 3) {
                // Navigate to a new page after generating 3 new questions
                navigation.navigate('MoodTestresult', { selectedEmoji});
              }} 
          }catch (error) {
            console.error('Failed to generate text:', error);
            console.log()
            // Handle error appropriately, e.g., display an error message to the user
          } 
        };
    
        
      

      const handleNext = () => {
        setSelectedEmoji('');
        generateQuestion();
        
      };
    
  function storeResult(selectedEmoji: string) {
    AsyncStorage.setItem('selectedEmoji', selectedEmoji)
    .then(() => {
      console.log('Result stored successfully');
    })
    .catch((error) => {
      console.error('Failed to store result:', error);
    });
  }

  return (
    <View style={styles.moodTest2}>
      <Text style={styles.howAreYouContainer}>{question} </Text>
      <Text style={styles.mood}>Mood ?</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout1]} onPress={() => navigation.goBack()}>
  <View style={[styles.frameChild, styles.frameChildBg]} />
  <Text style={[styles.back, styles.backTypo]}>back</Text>
</Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={[styles.frameChild, styles.frameChildBg]} />
        <Text style={[styles.next, styles.backTypo]} onPress={handleNext}>next</Text>
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
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    position: "absolute",
  },
  howAreYouContainer: {
    top: "10%",
    fontSize: 18,
    textAlign: "center",
    width: 365,
    color: Color.black,
    fontWeight:"bold",
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
    color: "#FFFF",
  },
  rectangleParent: {
    left: 20,
  },
  next: {
    color: "#FFFF",
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
    left: "13%",
    top:"35%",
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
    left: "15%",
    top:"15%"
   },
  rectangleContainer: {
    top: 294,
    left: 207,
  },
  text2: {
    left: "15%",
    top:"15%",
  },
  frameTouchableopacity: {
    left: 36,
  },
  text3: {
    left: "15%",
    top:"15%",
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
