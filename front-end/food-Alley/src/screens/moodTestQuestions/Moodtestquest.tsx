import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';
  


function MoodTestPage1({ navigation }: { navigation: NavigationProp<'Login'> }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const generateQuestions = async () => {
      try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
          prompt: 'Generate 3 mood test questions',
          max_tokens: 50,
          n: 3,
          stop: ['Q:'],
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'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'}`,
          },
        });

        const generatedQuestions = response.data.choices.map((choice: { text: string; }) => {
          return choice.text.trim().replace(/\d+\./, '');
        });

        setQuestions(generatedQuestions);
      } catch (error) {
        console.log(error);
      }
    };

    generateQuestions();
  }, []);

  const handleNext = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
 <Text style={styles.howAreYouContainer}>How are you feeling today? </Text>
      <Text style={styles.mood}>Mood ?</Text>
{questions.map((question, index) => (
  <View key={index} style={styles.questionContainer}>
    <Text style={styles.questionText}>{question}</Text>

    <View style={styles.answerOptions}>
    <TouchableOpacity
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.toggleDrawer()}
      >
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.text1, styles.textTypo1]}> 😔</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rectangleParent1, styles.rectangleParent1Position]}
        activeOpacity={0.2}
        onPress={() => navigation.toggleDrawer()}
      >
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.text3, styles.textTypo]}> 😠</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.answerOption}>
        <Text>😐</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.answerOption}>
        <Text>😔</Text>
      </TouchableOpacity>
    </View>
    </View>
     ))}

     <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
       <Text style={styles.nextButtonText}>Next</Text>
     </TouchableOpacity>
     </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ff5",
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
  }
});
export default MoodTestPage1;
