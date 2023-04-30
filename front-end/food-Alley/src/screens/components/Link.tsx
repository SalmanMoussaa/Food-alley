import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

interface LinkProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
}

const Link: React.FC<LinkProps> = ({ title, onPress, style }) => {
  return (
    <Text onPress={onPress} style={[styles.link, style]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#D43325",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default Link;