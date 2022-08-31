import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-web'

const style =()=> {
  return(
    <view style={styles.container}>
      <Text>
        Home Screen
      </Text>
      <Button
      title='เกี่ยวกับเรา'
      onPress={()=>navigator.navigate('About',{
        email:'reactnative.tni.ac.th'
      })}
    </view>
  )
}

export default FirstPage