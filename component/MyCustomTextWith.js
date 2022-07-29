import { View, Text } from "react-native";
import React from "react";
import Logo from "../component/Logo";
import User from "../component/User";
import LotsOfGreetings from "./LotsOfGreetings";

const Custext = ({ fName1, fName2, IName1, Iname2 }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>
        Your first Name is{fName1} and Last name is
        {IName1}
      </Text>
      <Text>
        Your first Name is{fName2} and Last name is
        {Iname2}
      </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Custext
        fName1="Napajun"
        fName2="Sushi"
        Inname1="Sangsananan"
        Iname2="Salmon"
      />
    </View>
  );
};
export default MyCustomTextWith;
