import { View, Text } from "react-native";
import React from "react";
import Logo from "../component/Logo";

const Greetings = (props) => {
  return (
    <View style={{ alignItem: "center" }}>
      <Text>Hello {props.name}</Text>
    </View>
  );
};
const LotsOfGreetings = () => {
  return (
    <view style={{ alignTiems: "center", top: 50 }}>
      <Greeting name="Marry chrismas" date="25 Dec-2022" />
      <Greeting name="Happy New year" date="31 Dec-2022" />
      <Greeting name="Songkarn festival" date="1 Apr-2022" />
    </view>
  );
};

export default LotsOfGreetings;
