import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Cafe from "./component/cafe";
import Logo from "./component/Logo";

const App = () => {
  const showData = () => {
    alert("hello button");
  };
  return (
    <View>
      {/* <Text style={[styles.title, styles.warning]}>Hello React native</Text> */}
      <Button onPress={showData} title="hit me" />
    </View>
  );
};

export default App;
