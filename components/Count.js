import { View, Text, Button } from "react-native";
import React, { useState,useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() =>{
    console.log('use effect 1')
  })

  useEffect(() =>{
    console.log('use effect 2')
  },[count])
  
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
const StyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
