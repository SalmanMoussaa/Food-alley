import { StatusBar } from "expo-status-bar";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import HomeScreen from "./src/screens/home/home";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import React, { createContext, useEffect, useState } from "react";
import StackSwitcher from "./src/navigation/OnboardingStack";
import { NavigationContainer } from "@react-navigation/native";
const ContextProvider = createContext<any>(null);

export const UserContext = createContext<any>(null);

export default function App() {
  const [flag, setFlag] = useState<boolean>(false);
  const [flag2, setFlag2] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [userToken, setUserToken] = useState<string>("");

  useEffect(() => {
    // will run on every render
  });

  useEffect(() => {
    // will run only once, on mount
  }, []);

  useEffect(() => {
    // will run on count change
  }, [flag2]);

  useEffect(() => {
    // will run on count OR flag change
  }, [flag2, flag]);

  return (
     <>
    <UserContext.Provider value={{
      userId,
      setUserId,
      userToken,
      setUserToken,
      
    }}>
    <NavigationContainer>

    <Provider store={store}>
      <StackSwitcher />
    </Provider>
    </NavigationContainer>
    </UserContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({});