import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button,TextInput} from 'react-native';
import FirstPage from './page/FirstPage';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';


function HomeScreen({ navigation, route }) {

  React.useEffect(() => {
    if (route.params?.post) {
      //Post updated
      //For example  
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title='Create Post'
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post : {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {

  const [postText, setPostText] = React.useState('');

  return (
    // use Fragmen
    <>
      <TextInput
        multiline
        placeholder='Plese text here'
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        onChangeText={setPostText}
        value={postText}
      />
      <Button
        title='Done'
        onPress={() => {
          //Pass params back to HomeScreen funchion 5555555555555555
          navigation.navigate('Home', { post: postText })
        }}
      />
    </>

  );
}


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
        <Stack.Screen name='FirstPage' component={FirstPage}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}/>
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
