import { View,TextInput } from 'react-native'
import React from 'react'

const TextinputExample = () => {
  return (
    <View style={{padding:10}}>
      
    <View> 
    style={{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    }}

    <TextInput
    placeholder='Course Goal'
    style={width:'80%',borderColor:'black',borderwidth:1,padding:10}/>
    </View>
    </View>

    )
}

export default TextinputExample