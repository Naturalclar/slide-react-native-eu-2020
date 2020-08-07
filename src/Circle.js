import React from "react";
import { View, StyleSheet } from "react-native-web";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.baseTextColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
});

export const Circle = ({ size = 300, style, children }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
