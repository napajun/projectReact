import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
 
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,45,85)",
    background: "rgb(250, 255, 255 )",
  },
};

function HomeScreen({navigation}){
  return(
    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Ionicons name="home" size={30} color="#42AC42" />
      <Text>Home Screen</Text>
      {/* <Button title="Go to Setting"
      onPress={() => navigation.navigate("Setting")}/> */}
    </View>
  )
}

function SettingScreen({navigation}){
  return(
    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Setting Screen</Text>
      <Button title="Go to Home"
      onPress={() => navigation.goBack()}/>
    </View>
  )
}

const Tab = createBottomTabNavigator();


function MyTabs(){
  return(
    <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon: ({focused,color,size})=>{
          let iconName;
          if(route.name==='Home'){
            iconName = focused
            ?'ios-information-circle'
            :'ios-information-circle-outline'
          } else if (route.name === 'Setting'){
            iconName = focused
            ?'ios-list-box'
            :'ios-list'
          }
          // you can return any component
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>
      
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
   
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name='Home'component={MyTabs}/>
        <Drawer.Screen name="Setting" component={SettingScreen}/>
      </Drawer.Navigator>
    
  )
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>    
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})