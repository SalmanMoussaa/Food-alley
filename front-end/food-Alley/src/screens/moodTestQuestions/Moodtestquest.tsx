import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable ,Image} from 'react-native';
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';
import { Border, Color, FontFamily, FontSize } from '../components/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Configuration, OpenAIApi } from 'openai';
import { color } from 'react-native-reanimated';

  


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
        <View style={styles.touchabl}>
      <View style={styles.align} >
      <TouchableOpacity
      style={[ styles.rectangleLayout]}
      activeOpacity={0.2}
      onPress={() => {
        setSelectedEmoji("😊");
        storeResult("😊");
      }}
>

  {/* <Image
    style={[styles.frameInner, styles.rectangleLayout]}
    resizeMode="cover"              
    source={require("../../../assets/emojibacground.png")}
    /> */}
  <Text style={[styles.text, ]}> 😊</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[ styles.rectangleLayout]}
  activeOpacity={0.2}
  onPress={() => {
    setSelectedEmoji("😔");
    storeResult("😔");
  }}
  
>
  
  <Text style={[styles.text,]}> 😔</Text>
</TouchableOpacity>
</View>
<View style={styles.align}>
<TouchableOpacity
 style={[ styles.rectangleLayout]}
  activeOpacity={0.2}
  onPress={() => {
    setSelectedEmoji("😫")  
    storeResult("😫");
  }}
  
>
 
  <Text style={[styles.text, ]}> 😫</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[ styles.rectangleLayout]}
  activeOpacity={0.2}
  onPress={() => {
    setSelectedEmoji("😠")  
      storeResult("😠");
  }}
>
  
  <Text style={[styles.text ]}> 😠</Text>
</TouchableOpacity></View>
</View>
<View style={styles.align}>
<Pressable style={[ styles.rectangleLayout1]} onPress={() => navigation.goBack()}>
<Text style={[ styles.backTypo]}>back</Text>
</Pressable>
      <Pressable style={[ styles.rectangleLayout1]}>
        <Text style={[ styles.backTypo]} onPress={handleNext}>next</Text>
      </Pressable>
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ffff",
    height:"100%"

  },
  align:{
    display:"flex",
    flexDirection:'row',
   marginBottom:40,
    gap:40,
    


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
  touchabl:{
    top:100,
    
    
    
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },rectangleLayout1: {
    height: 55,
    marginTop:150,
    backgroundColor:Color.d9D9D9,
    borderRadius:15,
    width: 151,
   /*  position: "absolute", */
  },
  frameChildBg: {
    backgroundColor: Color.d9D9D9,
    top: 0,
  },
  backTypo: {
    fontSize: 25,
    paddingTop:7,
    color:"white",
    
    textAlign: "center",
    fontFamily: FontFamily.indieFlowerRegular,
    fontWeight:"bold"
    // position: "absolute",
  },
  rectangleLayout: {
    height: 134,
    width: 151,

    backgroundColor:Color.d9D9D9,
    borderRadius:30
    // position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    // position: "absolute",
  },
  rectangleParent1Position: {
    top: 448,
    height: 134,
    width: 151,
    // position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    // position: "absolute",
  },
  howAreYouContainer: {
    
    fontSize: 20,
    textAlign: "center",
    width: 365,
    color: Color.black,
    fontWeight:"bold",
    fontFamily: FontFamily.indieFlowerRegular,
   
    // position: "absolute",
  },
  mood: {
    
   
    fontSize: 40,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.indieFlowerRegular,
    // position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    
    backgroundColor: Color.d9D9D9,
    top: 0,
    height: 49,
    width: 151,
    // position: "absolute",
  },
  back: {
    color: "#FFFF",
  },
  rectangleParent: {
   
  },
  next: {
    color: "#FFFF",
  },
  
  frameInner: {
    top: 33,
    borderRadius: Border.br_15xl,
    height: 134,
    
  },
  text: {
    
    fontSize:80,
    textAlign:"center",
    marginRight:20,
    marginTop:10
  },
  vectorParent: {
    top: 261,
    height: 167,
    
    width: 151,
    // position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_15xl,
    height: 134,
    
    backgroundColor: Color.d9D9D9,
    top: 0,
  },
  text1: {
    
    top:"15%"
   },
  rectangleContainer: {
    top: 294,
    
  },
  text2: {
   
    top:"15%",
  },
 
  text3: {
    top:"15%",
  },
  
  arrowLeft4Icon: {
    top: 37,
    width: 50,
    height: 50,
    
    // position: "absolute",
  },
  moodTest2: {
    backgroundColor: Color.wFBaseWhite,
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   alignItems:"center",
   height:"100%"
   

  
   
    
  },
});
export default MoodTestPage1;
