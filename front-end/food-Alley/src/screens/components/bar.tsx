import * as React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Border } from "./GlobalStyles";

const Bar = () => {
  const handleMoodtestPress = () => {
    // Handle moodtest button press here
  };

  const handleSettingsPress = () => {
    // Handle settings button press here
  };
  const handleMenuPress = () => {
    // Handle settings button press here
  };
  const handleHomePress = () => {
    // Handle settings button press here
  };

  return (
    <View style={styles.bar}>
      <Image
        style={styles.barChild}
        resizeMode="cover"
        source={require("../../../assets/Rectangle.png")}
      />
      <Pressable onPress={handleHomePress}>
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../../../assets/home.png")}
      />
      </Pressable>
      <Pressable onPress={handleMenuPress}>
      <Image
        style={[styles.menuIcon , styles.iconLayout]}
        resizeMode="cover"
        source={require("../../../assets/menu.png")}
      />
      </Pressable>
      <Pressable onPress={handleMoodtestPress}>
        <Image
          style={[styles.moodtestIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../../assets/moodtest.png")}
        />
      </Pressable>
      <Pressable onPress={handleSettingsPress}>
        <Image
          style={[styles.settingsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../../assets/settings.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 30,
    width: 30,
    top: 21,
    position: "absolute",
  },
  barChild: {
    top: -5,
    left: -28,
    width: 403,
    height: 75,
    position: "absolute",
  },
  homeIcon: {
    left: 55,
    borderRadius: Border.br_20xl,
  },
  menuIcon:{
    left: 111,
  },
  moodtestIcon: {
    left: 201,
  },
  settingsIcon: {
    left: 257,
  },
  bar: {
    flex: 1,
    width: "100%",
    height: 65,
  },
});

export default Bar;
