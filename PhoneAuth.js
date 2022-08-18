import { View, TextInput, Text, useColorScheme, StyleSheet, Image, TextComponent, Button, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

import Drusya from '../../assets/drusya.jpeg'
import Nani from '../../assets/nani.jpeg'
import Sahara from '../../assets/sahara.jpeg'

const PhoneAuth = ({navigation}) => {   
    const isDarkMode = useColorScheme() === 'dark';
    const [phoneNumber, setPhoneNumber] = useState("")
    const [userData, setUserData] = useState({})

    const Data = [
        {
            id:1,
            onetime:1632,
            //otp:1632,
            number:7396676216,
            image:Drusya,
        },
        {
            id:2,
            //otp:1874,
            onetime:1874,
            number:7396676218,
            image:Nani,
        },
        {
            id:3,
            //otp:5094,
            onetime:5094,
            number:7396676210,
            image:Sahara,
        }
    ]
    useEffect(()=>{
        setUserData(Data);
        //console.log('users data>>>>>',userData);
    },[])

    const OTPPage = () => {
        //console.log("userData.........",userData)
        //navigation.navigate("Password",{userData})
        userData.map((key)=>{
            if(key.number == phoneNumber){
                const number = key.number;
                const image = key.image;
                const otp = key.onetime;    
                navigation.navigate("Password",{number,image,otp})
            }
        })
    } 


    return (
        <View style={{flex:1,backgroundColor:isDarkMode ? Colors.black:Colors.white}}>
            <View style={{alignItems:'center',marginTop:40,marginHorizontal:20}}>
                <Image 
                    style={{width:70,height:70,tintColor:isDarkMode?Colors.white:Colors.black}}
                    source={{uri:"https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-login-call-to-action-bearicons-detailed-outline-bearicons-1.png"}}
                />
                <View style={{flexDirection:'row', alignItems:'center', borderBottomColor:isDarkMode ? Colors.white : Colors.black, borderBottomWidth:1, width:'100%', marginTop:50}}>
                    <Image 
                        style={{width:30,height:30,tintColor:isDarkMode?Colors.white:Colors.black}}
                        source={{uri:"https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-call-mobile-telephone-those-icons-lineal-those-icons.png"}}
                    />
                    <TextInput 
                        style={{width:'100%', marginLeft:10, color : isDarkMode ? Colors.white : Colors.black }}
                        placeholder='Phone Number'
                        placeholderTextColor={isDarkMode ? Colors.white : Colors.black}
                        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                        maxLength={10}
                    />
                </View>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center',height : 100}}>
                    <SecondaryButton 
                        name="Submit"
                        onPress={()=> OTPPage()}
                    />
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        flexDirection:'row',
    },
})
export default PhoneAuth
