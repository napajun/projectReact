import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

const UserNameandPassWord = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const click = () => {
    alert("email: " + email + "\n" + "password: " + password);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={styles.TextInput}
        placeholder="email"
        onChangeText={(email) => setemail(email)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="poassword"
        onChangeText={(password) => setpassword(password)}
      />
      <Button color="#7a42f7" title="Click" onPress={click} />
    </View>
  );
};

export default UserNameandPassWord;
const styles = StyleSheet.create({
  TextInput: {
    width: 300,
    height: 45,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    borderWidth: 1,
  },
});
