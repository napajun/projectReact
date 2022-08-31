import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ModelExample = () => {
  return (
    <View>
      <Text>ModelExample</Text>
    </View>
  );
};

export default ModelExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 100,
  },
  text: {
    color: "white",
    marginTop: 10,
    fontSize: 20,
    padding: 10,
  },
});
