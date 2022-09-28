import { Text, View ,Button} from 'react-native'
import React from 'react'

import styles from '../components/styles'

const FirstPage = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.container}>
            <Text style={styles.textTopStyle}>This is the First Page</Text>
            <Button
            title='Go to secondPage'
            onPress={() => navigation.navigate('Second Page')}
        />

            <Button
            title='Go to Third Page'
            onPress={() => navigation.navigate('Third Page')}
        />  
            </View>
            <Text style={styles.textBottomSytel}>
                thai-nichi institute of technology
            </Text>
      </View>
      )
    }

export default FirstPage
