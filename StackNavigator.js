import React from 'react'
import { Image, useColorScheme, View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneAuth from '../Components/PhoneAuth';
import { Colors } from 'react-native/Libraries/NewAppScreen'
import PasswordAuth from '../Components/PasswordAuth';
import MainPage from '../Components/MainPage';
import MaterialTopTab from './MaterialTopTab';
import ChatScreen from '../Components/ChatScreen';
import HeaderComponent from './HeaderComponent';
import ProfileScreen from '../Components/ProfileScreen';
import { actuatedNormalize } from '../PixelScaling/PixelScaling';
import ReduxPractice from '../../ReduxPractice';
const Stack = createNativeStackNavigator();

const StackNavigator = (props) => {
    //const isDarkMode = useColorScheme() === 'dark';
    
    
    return (
        <Stack.Navigator
            // screenOptions={{
            //     headerShown : false
            // }}
        >
            <Stack.Screen name="HomeScreen" 
                component={MaterialTopTab}
                options={{
                    title: 'Whatsapp',
                    headerStyle: {
                        backgroundColor: 'black',
                        color:'white',
                    },
                    headerTitleAlign : 'left',
                    headerTintColor: '#a9a9a9',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    //headerBackTitleVisible : false,
                    
                    headerRight : () => (
                        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity>
                                <Image 
                                    source={{uri : "https://img.icons8.com/external-line-adri-ansyah/64/000000/external-music-music-player-button-line-adri-ansyah-18.png"}} 
                                    style={{width:actuatedNormalize(20), height:actuatedNormalize(20), tintColor:'#a9a9a9',marginRight:20}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image 
                                    source={{uri : "https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"}} 
                                    style={{width:actuatedNormalize(20), height:actuatedNormalize(20), tintColor:'#a9a9a9'}}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            
            />
            <Stack.Screen 
                name="Chatting Screen" 
                component={ChatScreen} 
                options={{
                    //headerTitleAlign : 'left', 
                    headerShown : false,
                    headerStyle : {
                        backgroundColor : 'black'
                    },
                    // headerTintColor : 'white',
                    // header : () => (
                    //     <View style={{backgroundColor:'black'}}>
                    //         <View>
                    //             <Image 
                    //                 source={{uri : "https://img.icons8.com/ios-filled/50/000000/left.png"}} 
                    //                 style={{width:25, height:25, tintColor:'white'}}
                    //             />
                    //             <Image />
                    //             <View>
                    //                 <Text>Tejeswar Reddy</Text>
                    //                 <Text>Last seen 3:30PM</Text>
                    //             </View>
                    //         </View>
                    //     </View>
                    // )
                    //header : () => <ChatScreen {...props} />
                }} 
            />
             <Stack.Screen 
                name="Profile Screen" 
                component={ProfileScreen} 
                options={{
                    //headerTitleAlign : 'left', 
                    headerShown : false,
                    headerStyle : {
                        backgroundColor : 'black'
                    },
                }} 
            />
        </Stack.Navigator>
    )
}

export default StackNavigator
