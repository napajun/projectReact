import { View, Text, Button } from "react-native";
import React from "react";
import {Ionicons,FontAwesome} from "@expo/vector-icons";

import {
  HeaderButton,
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="Regis" iconName="person-add" onPress={() => alert('Register')} />
          
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FontAwesome name="home" size={30} color="#42AC42" />
      <Text>HomeScreen</Text>

      <Button
        color="#3D8CDA"
        title="open Drawer"
        onPress={() => navigation.openDrawer()}
        //  onPress={()=>navigation.navigate('About',{
        //     email:'reactnative.tni.ac.th'

        //  })}
      />

    
    </View>
  );
};

export default HomeScreen;
