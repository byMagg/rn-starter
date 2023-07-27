import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Dani";

  return (
    <View>
      <Text style={styles.textStyle}>Empezando con React Native!</Text>
      <Text style={styles.subHeaderStyle}>Me llamo {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
