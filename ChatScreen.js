import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native'
import React from 'react'
import drusya from '../../assets/drusya.jpeg'
import ChattingMessages from '../json/ChattingMessages'
import Chat from '../json/Chat'
import { actuatedNormalize } from '../PixelScaling/PixelScaling'


const ChatScreen = (props) => {
  console.log("props key>>>>>",props.route.params);
  //const {width, height} = Dimensions.get("window");
  return (
    <View style={{flex:1,backgroundColor:'#0E0C1D'}}>
      {Chat.map((user,index)=>{
        return(
          <> 
          {user.id == props.route.params ?
        <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomColor:'#12121b',borderBottomWidth:1,backgroundColor:'#12121b',paddingHorizontal:actuatedNormalize(10)}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:actuatedNormalize(70)}}>
                  <TouchableOpacity onPress={()=> props.navigation.goBack('')}>
                    <Image 
                      source={{uri:"https://img.icons8.com/material-outlined/24/000000/left.png"}}
                      style={{width:actuatedNormalize(25),height:actuatedNormalize(25), tintColor:'white'}}
                      //onPress={()=> props.navigation.navigate('Chatting Screen')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("Profile Screen",props.route.params)}>
                    <Image 
                      source={user.image}
                      style={{width:actuatedNormalize(50),height:actuatedNormalize(50),borderRadius:actuatedNormalize(50),marginLeft:actuatedNormalize(10)}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("Profile Screen",props.route.params)}>
                    <View style={{marginLeft:actuatedNormalize(5),justifyContent:'center'}}>
                      <Text style={{fontSize:actuatedNormalize(18),color:'white',fontWeight:'bold'}}>{user.name}</Text>
                      <Text style={{fontSize:actuatedNormalize(12),marginLeft:actuatedNormalize(2),marginTop:actuatedNormalize(2),color:'white'}}>{user.lastseen}</Text>
                    </View>
                  </TouchableOpacity>
              </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'25%',alignItems:'center',marginRight:actuatedNormalize(6)}}>
            <TouchableOpacity>
              <Image
                source={{uri:"https://img.icons8.com/material-rounded/24/000000/no-video--v2.png"}}
                style={{width:actuatedNormalize(20),height:actuatedNormalize(20), tintColor:'white'}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{uri:"https://img.icons8.com/external-gradak-royyan-wijaya/24/000000/external-call-gradak-communikatok-solidarity-gradak-royyan-wijaya-4.png"}}
                style={{width:actuatedNormalize(20),height:actuatedNormalize(20), tintColor:'white'}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{uri:"https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"}}
                style={{width:actuatedNormalize(20),height:actuatedNormalize(20), tintColor:'white'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        :null}</>)})} 
      <ScrollView>
        {ChattingMessages.map((msg,index)=>{
          return(
          <View key={index}>
            {msg.status === "sent" ?
            <View style={{flex:1,color:"white",marginTop:actuatedNormalize(10),width:'100%',alignItems:'flex-end'}}>
              <View style={{height:actuatedNormalize(40),backgroundColor:'#075E54',borderTopLeftRadius:actuatedNormalize(10),borderBottomLeftRadius:actuatedNormalize(10),borderBottomRightRadius:actuatedNormalize(5),justifyContent:'center',marginRight:actuatedNormalize(20)}}>
                <Text style={{marginLeft:actuatedNormalize(10),marginRight:(10),color:'white'}}>{msg.message}</Text>
              </View>
            </View>:
            <View style={{flex:1,color:"white",marginTop:actuatedNormalize(10),width:'100%',alignItems:'flex-start'}}>
              <View style={{height:actuatedNormalize(40),backgroundColor:'#121212',borderTopRightRadius:actuatedNormalize(10),borderBottomRightRadius:actuatedNormalize(10),borderBottomLeftRadius:(5),justifyContent:'center',marginLeft:actuatedNormalize(20)}}>
                <Text style={{marginLeft:actuatedNormalize(10),marginRight:actuatedNormalize(10),color:'white'}}>{msg.message}</Text>
              </View>
            </View>}
          </View>
        )})}
      </ScrollView>
      <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:actuatedNormalize(20),height:actuatedNormalize(60)}}>
        <View style={{height:actuatedNormalize(50),backgroundColor:'#121212',borderRadius:actuatedNormalize(30),justifyContent:'center'}}>
          <View style={{width:'80%',flexDirection:'row',alignItems:'center',marginLeft:actuatedNormalize(10)}}>
            <TouchableOpacity>
              <Image
                source={{uri:"https://img.icons8.com/windows/32/000000/laugh.png"}}
                style={{width:actuatedNormalize(25),height:actuatedNormalize(25), tintColor:'white',marginLeft:actuatedNormalize(5)}}
              />
            </TouchableOpacity>
            <TextInput 
              value=''
              placeholder='Message'
              placeholderTextColor={"white"}
              style={{marginLeft:actuatedNormalize(2),fontSize:actuatedNormalize(16),width:"60%"}}
            />
            <TouchableOpacity>
              <Image
                source={{uri:"https://img.icons8.com/glyph-neue/32/000000/attach.png"}}
                style={{width:actuatedNormalize(25),height:actuatedNormalize(25), tintColor:'white',marginLeft:actuatedNormalize(5)}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{uri:"https://img.icons8.com/ios-glyphs/30/000000/rupee.png"}}
                style={{width:actuatedNormalize(25),height:actuatedNormalize(25), tintColor:'white',marginLeft:actuatedNormalize(10)}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{uri:"https://img.icons8.com/material-rounded/24/000000/camera--v2.png"}}
                style={{width:actuatedNormalize(25),height:actuatedNormalize(25), tintColor:'white',marginLeft:actuatedNormalize(10)}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginLeft:actuatedNormalize(10)}}>
          <TouchableOpacity>
            <Image
              source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACM0lEQVRoge2Zz2pTQRSHv2hCMC5tFNPqQgi60z6AYLuRuqubij6BCxGfQFyIL6GrduPGEkUFq75AUaStm7YrtWhcGAVb/0AbF3Mv3Hsyk9wpc3PHMB+cxdycOef8JjOTuRMIBAL9KOUY+xIwBzSj9jrwEHieY06nHAGWgK7BXkQ+XlMD3mAWEdsycKigGjNxh8EiYrtdUI0DOQB8IbuQdtTHO86QXURsp10ldzkiR4fUR4tLIfuJdbDI5F4ShPhGEOIbQYhvBCG+MTJCyha+NaCaaP8BdtyWM5Qc3CN9cp0Xn09if/o9K2IsiM/vZi3OZmq1Rfu4aG+gRjArv4FN8awh2l+zBrMRsiXa50hPzZ9AyyJeC9hOtMtRzCSfLOJl5hiwR/qrvyB8msAPBk+p78Ap0Xda+Ozi8H1FIi8WFjU+00AHs4hvwJSm32Pht+y49hS3NIWd1/idBB6gRj726wD3gRMa/ylN3JuOa09RQy36ZMKP9C78mAowEVnF4NNArb9kzM8M4broBr2j9xYY30esCeCdJt51J5UOoAQ81STfAi5axJlBjbyM84R8r3JT1FG/G6Yr0VnUNJQcBi4DLw1914GxnGvvoQG8NxTURR0tVoBnka1Gz0z+a5jXWu6MobZg26OJtEd4crF9DbV72Qr4AFwtoN6+VIArwGvgF/2n3CvUfyc2p+9CqKJ2JSlihvQx/b+gTq+Qel7JRuYNMQjxjZERkuf29xd1FJHPAoFAIMA/jEAE5Y+6EcEAAAAASUVORK5CYII="}}
              style={{width:actuatedNormalize(30),height:actuatedNormalize(30), tintColor:'white'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChatScreen
