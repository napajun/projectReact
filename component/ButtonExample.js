import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const Separator = () => <View style={styles.separator} />;
const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.
        </Text>

        <Button
          title="Press Me"
          onPress={() => alert("Simple Button pressed")}
        />
        <Separator />
       
      </View>
      <View>
      <Text style={styles.title}>
          The title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.The title
          and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.
        </Text>

        <Button
          title="Press Me"
          onPress={() => alert("Button with adjusted color")}
          color="pink"
        />
        <Separator />
        </View>
        <View>
      <Text style={styles.title}>
          The title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.
        </Text>

        <Button
          title="Press Me"
          disabled
          color="skyblue"
        />
        <Separator />
        </View>
        
        <View>
      <Text style={styles.title}>
          The title and onPress handler are required
        </Text>

      
        <View style = {styles.fixToText}>
        <Button 
          title="Left Button"
          onPress={() => alert("Left Buttoon Pressed")}
          color="skyblue"
        />

        <Button
          title="Right Button"
          onPress={() => alert("Right Buttoon Pressed")}
          color="skyblue"
        />
        </View>
        </View>
        
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});