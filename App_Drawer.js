import { StyleSheet, Text, View , Button,TextInput} from 'react-native';
import FirstPage from './page/FirstPage';
import secondPage from './page/secondPage';
import thirdPage from './page/thirdPage';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

function HomeScreen ({navigation}){
  return(
    <View style ={{flex:1,alignItems:'center',justifyContent: 'center'}}>
      <Button 
      onPress={() => navigation.navigate('Notification')}
      title='Go to notification'
      />
    </View>
  );
}

function Notification ({navigation}){
  return(
    <View style ={{flex:1,alignItems:'center',justifyContent: 'center'}}>
      <Button 
      onPress={() => navigation.goBack()}
      title='Go to Back'
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
          <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name='Home'component={HomeScreen}/>
            <Drawer.Screen name='Notification'component={Notification}/>
          </Drawer.Navigator>
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
