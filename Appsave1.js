import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// function HomeScreen(){
//     return(
//       <View style = {{flex:1 ,justifyContent:'center',alignItems:'center'}}>
//         <Text>HomeScreen</Text>
//         <Button title= 'เกี่ยวกับเรา' />
//       </View>
//     );
// }

// function AboutScreen(){
//   return(
//     <View style = {{flex:1 ,justifyContent:'center',alignItems:'center'}}>
//       <Text>AboutScreen</Text>
//     </View>
//   );
// }



const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#9D9DE8'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold'}
      }}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='About' component={AboutScreen}/>
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
