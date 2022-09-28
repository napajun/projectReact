import { View, Text ,Button} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {
  return (
    <View style = {{flex:1 ,justifyContent:'center',alignItems:'center'}}>
    <FontAwesome name="home" size={30} color="#8D8DCB" />
    <Text>HomeScreen</Text>
    
    <Button color="#8D8DCB"
     title= 'เกี่ยวกับเรา' 
     onPress={()=>navigation.navigate('About',{
        email:'reactnative.tni.ac.th'  
          
     })}
     /> 
    
  </View>
  )
}

export default HomeScreen