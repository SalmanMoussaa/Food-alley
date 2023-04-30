import { StyleSheet } from "react-native";

// Define your font families and font sizes here
const FontFamily = {
  Inter: "Inter-Regular",
  InterBold: "Inter-Bold",
  InterExtraBold: "Inter-ExtraBold",
  OpenSans: "OpenSans-Regular",
};

const FontSize = {
  small: 12,
  medium: 16,
  large: 20,
  extraLarge: 24,
};

// Define your colors here
const Color = {
  primary: "#4a148c",
  secondary: "#1a237e",
  background: "#f5f5f5",
  white: "#ffffff",
  black: "#000000",
  gray: "#777777",
  success: "#4caf50",
  warning: "#ffc107",
  danger: "#f44336",
};

// Define your border radius values here
const BorderRadius = {
  small: 4,
  medium: 8,
  large: 12,
  extraLarge: 16,
};

// Define your border width values here
const BorderWidth = {
  thin: StyleSheet.hairlineWidth,
  medium: 2,
  thick: 4,
};

// Define your styles here
const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.background,
  },
  text: {
    fontFamily: FontFamily.Inter,
    fontSize: FontSize.medium,
    color: Color.black,
  },
  button: {
    borderRadius: BorderRadius.small,
    borderWidth: BorderWidth.thin,
    borderColor: Color.primary,
    backgroundColor: Color.primary,
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: FontFamily.InterBold,
    fontSize: FontSize.medium,
    color: Color.white,
  },
});

export { FontFamily, FontSize, Color, BorderRadius, BorderWidth, GlobalStyles };
