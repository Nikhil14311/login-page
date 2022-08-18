import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import drusya from '../../assets/drusya.jpeg'
import Chat from '../json/Chat'
import { actuatedNormalize } from '../PixelScaling/PixelScaling'
const MainPage = (props) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
        <ScrollView vertical={true}>
        {Chat.map((user,index)=>{
            return(
                <TouchableOpacity style={{flexDirection:'row',marginHorizontal: actuatedNormalize(20), marginTop:actuatedNormalize(20),justifyContent:'space-between'}} key={index} onPress={()=>{props.navigation.navigate('Chatting Screen',user.id)}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View>
                            <Image 
                                source={user.image}
                                style={{width:actuatedNormalize(50),height:actuatedNormalize(50),borderRadius:actuatedNormalize(50)}}
                            />
                        </View>
                        <View style={{marginLeft:actuatedNormalize(10)}}>
                            <View style={{}}>
                                <Text style={{fontSize:actuatedNormalize(15),fontWeight:'bold',color:'white'}}>{user.name}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:actuatedNormalize(5)}}>
                                { user.msgstatus === "unseen" ? 
                                <Image 
                                    //source={key.dot}
                                    source={{uri:"https://img.icons8.com/ios-filled/50/000000/double-tick.png"}}
                                    style={{width:actuatedNormalize(15),height:actuatedNormalize(15),tintColor:'gray'}}
                                /> 
                                : user.msgstatus === "seen" ?
                                <Image 
                                    //source={key.dot}
                                    source={{uri:"https://img.icons8.com/ios-filled/50/000000/double-tick.png"}}
                                    style={{width:actuatedNormalize(15),height:actuatedNormalize(15),tintColor:'#87CEEB'}}
                                /> 
                                : 
                                <Image 
                                    //source={key.dot}
                                    source={{uri:"https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"}}
                                    style={{width:actuatedNormalize(15),height:(15),tintColor:'white'}}
                                /> 
                                }
                                <Text style={{color:'gray',fontSize:actuatedNormalize(15),marginLeft:actuatedNormalize(2),fontWeight:'bold'}}>{user.message}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{justifyContent:'flex-start'}}>
                        <Text style={{color:'white',fontSize:actuatedNormalize(12)}}>{user.time}</Text>
                    </View>
                </TouchableOpacity>      
            )
        })}
        </ScrollView>
    </SafeAreaView>
  )
}

export default MainPage
