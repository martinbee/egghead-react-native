import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Row = ({ complete, text }) => (
  <View style={styles.container}>
    <Text style={complete ? styles.complete : styles.text}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  complete: {
    fontSize: 24,
    color: "#4d4d4d",
    textDecorationLine: 'line-through',
  },
  text: {
    fontSize: 24,
    color: "#4d4d4d",
  }
});

export default Row;
