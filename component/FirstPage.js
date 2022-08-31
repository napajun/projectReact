import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
improt {Style} from'../components/style'

const FirstPage = ({navigation})=>{}
  return (
    <View style={StyleSheet.container}>
      <Text>FirstPage

      </Text>
      <Button
      tittle='GO TO SECOND PAGE'
      style={style.textTopStyle}
      onPress={()=>navigation}
    </View>
  )
}