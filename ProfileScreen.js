import { View, Text, Image, Alert, TouchableOpacity,ScrollView } from 'react-native'
import React, {useState} from 'react'
//import { ScrollView } from 'react-native-gesture-handler'
import Drusya from '../../assets/drusya.jpeg'
import Chat from '../json/Chat'

const ProfileScreen = (props) => {
    console.log("params for profile screen",props.route.params);
    const [dropdown, setDropdown] = useState(false)
  return (
    <View style={{flex:1, backgroundColor:'#12121b',paddingTop:10}} >    
      <ScrollView showsVerticalScrollIndicator={false}>
        {Chat.map((userdata) => {
        return(
        <>
        {userdata.id === props.route.params ? 
        <View>
            <View style={{width:'100%',height:280,borderBottomWidth:5,borderBottomColor:'black'}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:20}}>
                    <TouchableOpacity onPress={() => props.navigation.goBack('')}>
                        <Image 
                            source={{uri:"https://img.icons8.com/material-outlined/24/000000/left.png"}}
                            style={{width:20,height:20,tintColor:'white'}}
                            //onPress={()=>props.navigation.goBack('')}
                        /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {dropdown ? setDropdown(false):setDropdown(true)}}>
                        <Image 
                            source={{uri:"https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"}}
                            style={{width:20,height:20,tintColor:'white'}}
                        /> 
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image 
                        source={userdata.image}
                        style={{width:100,height:100,borderRadius:50}}
                    /> 
                    <Text style={{color:'white',marginTop:5,fontSize:16}}>{userdata.name}</Text>
                    <Text style={{color:'gray',marginTop:5,fontSize:16}}>{userdata.phonenumber}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'40%',marginTop:29}}>
                        <TouchableOpacity>
                            <Image 
                                source={{uri:"https://img.icons8.com/external-solid-adri-ansyah/64/000000/external-iphone-smartphone-apps-solid-adri-ansyah-41.png"}}
                                style={{width:20,height:20,tintColor:'green',alignSelf:'center'}}
                            />
                            <Text style={{color:'green',marginTop:10,fontSize:16}}>Audio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={{uri:"https://img.icons8.com/external-solid-adri-ansyah/64/000000/external-camera-camera-interface-solid-adri-ansyah-13.png"}}
                                style={{width:20,height:20,tintColor:'green',alignSelf:'center'}}
                            />
                            <Text style={{color:'green',marginTop:10,fontSize:16}}>Video</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
            <View style={{height:80,borderBottomWidth:5,borderBottomColor:'black',paddingHorizontal:20, justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:16}}>{userdata.status}</Text>
                <Text style={{color:'white',fontSize:12,marginTop:10}}>{userdata.statusupdatedate}</Text>
            </View>
            <View style={{paddingHorizontal:20,height:150,borderBottomColor:'black',borderBottomWidth:5,justifyContent:'center'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                    <Image 
                        source={{uri: "https://img.icons8.com/material-rounded/24/000000/bell--v2.png"}}
                        style={{width:20,height:20,tintColor:'gray'}}
                    />
                    <Text style={{color:'white',fontSize:16,marginLeft:20}}>Mute Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',width:'60%',alignItems:'center',marginTop:10}}>
                    <Image 
                        source={{uri : "https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/000000/external-love-wedding-jumpicon-glyph-jumpicon-glyph-ayub-irawan.png"}}
                        style={{width:20,height:20,tintColor:'gray'}}
                    />
                    <Text style={{color:'white',fontSize:16,marginLeft:20}}>Custom Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',width:'60%',alignItems:'center',marginTop:10}}>
                    <Image 
                        source={{uri:"https://img.icons8.com/ios-filled/50/000000/xlarge-icons.png"}}
                        style={{width:20,height:20,tintColor:'gray',marginTop:5}}
                    />
                    <Text style={{color:'white',fontSize:16,marginLeft:20}}>Media Visibility</Text>
                </TouchableOpacity>
            </View> 
            <View style={{paddingHorizontal:20,height:150,justifyContent:'center',borderBottomColor:'black',borderBottomWidth:5}}>
                <TouchableOpacity style={{flexDirection:'row',width:'60%',alignItems:'center'}}>
                    <Image 
                        source={{uri: "https://img.icons8.com/external-solid-adri-ansyah/64/000000/external-interface-essentials-ui-solid-adri-ansyah-22.png"}}
                        style={{width:20,height:20,tintColor:'gray'}}
                    />
                    <Text style={{color:'white',fontSize:16,marginLeft:20}}>Encryption</Text>
                </TouchableOpacity>
                <Text style={{color:'gray',marginLeft:38,fontSize:16}}>Messages and calls are end to end encryptes. Tap to verify.</Text>
                <TouchableOpacity style={{flexDirection:'row',width:'60%',alignItems:'center', marginTop:10}}>
                    <Image 
                        source={{uri:"https://img.icons8.com/material-outlined/24/000000/process.png"}}
                        style={{width:20,height:20,tintColor:'gray'}}
                    />
                    <Text style={{color:'white',fontSize:16,marginLeft:20,marginTop:5}}>Disappearing messages</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:20,height:100,justifyContent:'space-around',flexDirection:'column'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                    <Image 
                        source={{uri:"https://img.icons8.com/fluency-systems-filled/48/000000/do-not-disturb--v2.png"}}
                        style={{width:20,height:20,tintColor:'red'}}
                    />
                    <Text style={{color:'red',fontSize:16,marginLeft:20}}>Block {userdata.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                    <Image 
                        source={{uri:"https://img.icons8.com/external-solid-adri-ansyah/64/000000/external-social-social-media-interface-solid-adri-ansyah-46.png"}}
                        style={{width:20,height:20,tintColor:'red'}}
                    />
                    <Text style={{color:'red',fontSize:16,marginLeft:20}}>Report {userdata.name}</Text>
                </TouchableOpacity>
            </View>
        </View>
        :null}
        </>)})}
      </ScrollView>
     {dropdown ? 
         <View style={{width:180,height:100,backgroundColor:'#12121b',position:'absolute',left:160,top:30,justifyContent:'center',paddingHorizontal:10}}>
         <Text style={{color:'white'}}>Share</Text>
         <Text style={{color:'white'}}>Block</Text>
         <Text style={{color:'white'}}>Nikhil Karanam</Text>
         <Text style={{color:'white'}}>Nikhil Karanam</Text>
       </View> :null 
    }
    </View>
  )
}

export default ProfileScreen
