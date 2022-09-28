import { View, Text ,Button} from 'react-native'
import React from 'react'

const AboutScreen = ({route}) => {

   // const {email} = route.params;

  return (
    <View style = {{flex:1 ,justifyContent:'center',alignItems:'center'}}>
      <Text>AboutScreen</Text>
      {/* <Text>Email : {email}</Text> */}
      <Text>Email : {route.params.email}</Text>
    </View>
  )
}

export default AboutScreen