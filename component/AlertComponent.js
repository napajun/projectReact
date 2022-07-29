import { Alert, StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const AlertComponent = () => {

    const simpleAlertHanler = () =>{
        alert('Hello I am Simple Alert from JavaScript')
    }

    const twoOptionAlertHanler = () =>{
            Alert.alert(
                //title
                'Hello',
                //body
                'I am two option alert from React Native'
                [
                    {
                            text:'Yes',
                            onPress: ()=> alert('Yes Pressed')
                    },
                    {
                        text:'No',
                        onPress: ()=> alert('No Pressed'),
                        style:'cancel'
                    }

                ],
                {cancelable: false}

            );
    }

  return (
    <View  style = {styles.container}>
        <Button
        title = 'Simple Alert'
        onPress = {simpleAlertHanler}/>

        <Button
        title = 'Alert with Two Options'
        onPress = {twoOptionAlertHanler}/>
     
     
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({
    container :{
        flex: 1,alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ecf0f1"
       
    }
})