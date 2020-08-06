import React from "react";
import { Text, StyleSheet } from "react-native-web";
import { Colors } from "./Colors";
const styles = StyleSheet.create({
  container: {
    color: Colors.baseTextColor,
    fontSize: 32,
    fontWeight: "400",
  },
});

export const Paragraph = ({ style, children }) => (
  <Text
    accessibilityRole="heading"
    style={[styles.container, style]}
  >
    {children}
  </Text>
);
