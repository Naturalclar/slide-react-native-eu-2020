import React from "react";
import { Text, StyleSheet } from "react-native-web";
import { Colors } from "./Colors";
const styles = StyleSheet.create({
  container: {
    color: Colors.baseTextColor,
    fontSize: 48,
    fontWeight: "400",
  },
  bold: {
    fontWeight: "500",
  },
});

export const SubHeading = ({
  style,
  bold,

  children,
}) => (
  <Text
    accessibilityRole="heading"
    style={[styles.container, bold && styles.bold, style]}
  >
    {children}
  </Text>
);
