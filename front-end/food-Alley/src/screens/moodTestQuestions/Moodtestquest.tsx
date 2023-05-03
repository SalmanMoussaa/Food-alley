import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

function MoodTestPage1({ navigation }) {
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
            'Authorization': `Bearer ${YOUR_OPENAI_API_KEY}`,
          },
        });

        const generatedQuestions = response.data.choices.map((choice) => {
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
    navigation.navigate('MoodTestPage2');
  };

  return (
    <View>
     <Text style={styles.questionTitle}>Answer these questions to determine your mood:</Text>

{questions.map((question, index) => (
  <View key={index} style={styles.questionContainer}>
    <Text style={styles.questionText}>{question}</Text>

    <View style={styles.answerOptions}>
      <TouchableOpacity style={styles.answerOption}>
        <Text>😄</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.answerOption}>
        <Text>😊</Text>
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

export default MoodTestPage1;
