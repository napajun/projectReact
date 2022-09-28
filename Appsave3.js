import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import FirstPage from "./page/FirstPage";
import secondPage from "./page/secondPage";
import thirdPage from "./page/thirdPage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";

function FeedScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="open drawer"/>
      <Button title="Toggle drawer"/>
    </View>
  );
}

function ArticleScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}


function NotificationScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Notification Screen</Text>
    </View>
  );
}


function CustomDrawerContent(Props) {
  return (
    <DrawerContentScrollView {...Props}>
      <DrawerItemList {...Props} />
      <DrawerItem label="Close Drawer" onPress={() => alert("Link to help")} />
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
    useLegacyImplementation 
    drawerContent={(Props)=><CustomDrawerContent{...Props}/>}
    screenOptions = {{
      drawerStyle:{
       
        width:240,
      }
      
    }}
    >
    <Drawer.Screen name="Feed" component={FeedScreen} />
    <Drawer.Screen name="Article" component={ArticleScreen} />
    <Drawer.Screen name="Notification" component={NotificationScreen} />
  </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
