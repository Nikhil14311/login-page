import { View, Text, Image, TextInput, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React, {useState, useEffect} from 'react'
import SecondaryButton from '../common/SecondaryButton'

const PasswordAuth = (props) => {
    console.log("params....", props);
    const [password, setPassword]=useState("")
    const [count, setCount] = useState(120)
    const isDarkMode = useColorScheme() === 'dark';
    // useEffect(()=>{
    //     count=count-1;
    //     setCount(count)
    //     console.log(count);
    // })
    const MainPage = () => {

    }
    return (
        <View style={{flex:1,backgroundColor:isDarkMode?Colors.black:Colors.white,width:'100%'}}> 
            <View style={{marginHorizontal:20}}>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:70}}>
                    <Image 
                        style={{width:100,height:100,borderRadius:50,borderColor:"red",borderWidth:3}}
                        source={props.route.params.image}
                    />
                </View>
                <View style={{flexDirection:'row', alignItems:'center', borderBottomColor:isDarkMode ? Colors.white : Colors.black, borderBottomWidth:1, width:'100%', marginTop:20}}>
                    <Image 
                        style={{width:30,height:30,tintColor:isDarkMode?Colors.white:Colors.black}}
                        source={{uri:"https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-call-mobile-telephone-those-icons-lineal-those-icons.png"}}
                    />
                    <TextInput 
                        style={{width:'100%', marginLeft:10, color : isDarkMode ? Colors.white : Colors.black }}
                        placeholder='OTP'
                        placeholderTextColor={isDarkMode ? Colors.white : Colors.black}
                        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                        maxLength={10}
                    />
                </View> 
                <View style={{justifyContent:'flex-end',width:'100%',flexDirection:'row',marginTop:10}}>
                    <Text style={{color : isDarkMode ? Colors.white : Colors.black}}>Remaining time : 120</Text>
                </View>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center',height : 100}}>
                    <SecondaryButton 
                        name="Submit"
                        onPress={()=> MainPage()}
                    />
                </View>
            </View>
        </View>
    )
}

export default PasswordAuth
