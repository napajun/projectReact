import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
const DynamicStyle = () => {
  const [defaultStyle, setDefultStyle] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <view style={styles.container}>
        <Text style={defaultStyle ? styles.style1 : styles.style2}>
          About React Native
        </Text>
        <Button
          title="Chang Default style"
          onPress={() => setDefaultStyle(!defaulStyle)}
        />
      </view>
    </SafeAreaView>
  );
};

export default DynamicStyle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    mergin: 10,
  },
});
return (
  <View>
    <Text>DynamicStyle</Text>
  </View>
);
