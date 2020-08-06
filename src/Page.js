import React from "react";
import { View, StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#f1f7f7",
    padding: 48,
  },
});

export const Page = ({ children }) => (
  <View style={styles.container}>{children}</View>
);
