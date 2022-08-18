import { Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const SecondaryButton = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <TouchableOpacity onPress={props.onPress} style={{width:230,height:40, alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'red'}}>
            <Text styles={{color:isDarkMode?Colors.white:Colors.black}}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default SecondaryButton
