import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";

import HomeScreen from "./screens/HomeScreen";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,45,85)",
    background: "rgb(229, 255, 234 )",
  },
};

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
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
    <SafeAreaView style={{ flex: 1 }}>
      
        <Image
          source={require('C:/nvProject/assets/react_logo.png')}
          style={styles.sideMenuProfileIcon}
        />
      

      <DrawerContentScrollView {...Props}>
        <DrawerItemList {...Props} />
        <DrawerItem
          label="CloseDrawer"
          onPress={() => Props.navigation.closeDrawer()}
        />
        {/* <DrawerItem label="toggleDrawer" onPress={() => Props.navigation.toggleDrawer()} /> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(Props) => <CustomDrawerContent {...Props} />}
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* <Drawer.Screen name="Article" component={ArticleScreen} /> */}
      <Drawer.Screen name="Notification" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
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
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});
