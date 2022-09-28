import { Text, View,Button } from 'react-native'
import React from 'react'

import styles from '../components/styles'

const thirdPage = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <View style = {styles.container}>   
    <Text>This is the Third Page</Text>
    
    <Button
    title='Go to secondPage'
    onPress={() => navigation.navigate('First Page')}
  />

    <Button
    title='Go to Third Page'
    onPress={() => navigation.navigate('Second Page')}
  />
     </View>
     <Text style={styles.textBottomSytel}>
        thai-nichi institute of technology
      </Text>
    
  </View>
  )
}

export default thirdPage
