import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StyleProp, ViewStyle, ImageStyle } from 'react-native';

interface FoodItemProps {
    foodname: string;
    imageUri: string;
    kitchenName: string;
  }
  
  const FoodItem: React.FC<FoodItemProps> = ({ foodname, imageUri, kitchenName }) => {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.foodname}>{foodname}</Text>
          <Image style={styles.image} source={{ uri: imageUri }} />
          <Text style={styles.kitchenName}>{kitchenName}</Text>
        </View>
        <Image
          style={styles.heartIcon}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/brj7d79qb4m-1%3A16?alt=media&token=696d5ba6-d138-44d7-b5ca-1bad33542a0e",
          }}
        />
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      position: "relative",
      width: 161.66,
      height: 164.08,
      borderRadius: 13.27,
      boxSizing: "border-box",
      backgroundColor: "rgba(254,89,50,1)",
    },
    infoContainer: {
      position: "absolute",
      top: 14,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 117.39,
      height: 123,
      boxSizing: "border-box",
    },
    foodname: {
      color: "rgba(255,255,255,1)",
      fontSize: 24,
      lineHeight: 24,
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    image: {
      width: 98.93,
      height: 69.97,
    },
    kitchenName: {
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      lineHeight: 16,
      fontFamily: "Inter, sans-serif",
      fontWeight: "800",
    },
    heartIcon: {
      position: "absolute",
      top: 133,
      left: 130,
      width: 24.13,
      height: 24.13,
    },
  });
  
  export default FoodItem;
