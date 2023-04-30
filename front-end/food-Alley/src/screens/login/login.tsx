import * as React from "react";
import { Image, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import MyButton from "../components/Button";
import MyLink from "../components/Link";


interface SigninProps {
  style?: StyleProp<ViewStyle>;
}

const Signin: React.FC<SigninProps> = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.form]}>
        <Input value="Email" label="Email" onchangeText="" />
        <Input value="Password" label="Password"  onchangeText="" />
      </View>
      <View style={styles.buttons}>
        <MyButton title="Sign in" onPress={() => navigation.navigate()} />
        <MyLink
          title="Register instead"
          onPress={() => navigation.navigate()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  heading: {
    width: 260,
    height: 30,
    marginBottom: 40,
    marginTop: 20,
  },
  form: {
    marginBottom: 20,
  },
  buttons: {
    width: 260,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Signin;