import { StyleSheet, Text, View , Button,TextInput} from 'react-native';
import FirstPage from './page/FirstPage';
import secondPage from './page/secondPage';
import thirdPage from './page/thirdPage';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'red'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold'}
      }}>
        <Stack.Screen name='First Page' component={FirstPage}/>
        <Stack.Screen name='Second Page' component={secondPage}/>
        <Stack.Screen name='Third Page' component={thirdPage}/>
       
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
