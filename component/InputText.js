import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const InputText = () => {
  const [userName, setUserName] = useState("");

  return (
    <View style={{ flex: 1, marginTop: 20, alignItem: "center" }}>
      <Text>Insert any text in below in put</Text>
      <TextInput
        value={userName}
        onChangeText={(userName) => {
          setUserName(userName)
        }}
        style={styles.TextInput}
        placeholder="Please input username"
      />
      <Text style={{ color: "blue", fontSize: 20 }}>{userName}</Text>
    </View>
  );
};

export default InputText
const styles = StyleSheet.create({
  TextInput: {
    width: 250,
    padding: 10,
    marginTop: 20,
    marginButtom: 10,
    backgroundColor: "blue"
  }
})
