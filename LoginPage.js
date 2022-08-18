import { View, Text, StyleSheet, Image, ImageBackground, StatusBar,Keyboard, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, {useReducer} from 'react'
import drusya from '../assets/drusya.jpeg'
import creditionals from './creditionals.json'
import { useState } from 'react'
import AuthContext from './auth-context'
const initialState = {
  formData : {
    username : {
      value : '',
      errorMsg : '',
      touched: false,
      options : [],
      valid : true
    },
    password : {
      value : '',
      errorMsg : '',
      touched: false,
      options : [],
      valid : true
    }
  }
}

const reducer = (state, action) => {
    switch(action.type){
      case "commonUpdate":
        return{
          ...state,
          ...action.payload 
        };
      case 'default':
        return state
    }
}

const LoginPage = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
  const [boolean,setBoolean] = useState(false)
  const [authStatus, setAuthStatus] = useState(null)
  const changeText = (name,val) => {
    setBoolean(false)
    let tempState = state.formData;
    let tempFormData = tempState;
    tempFormData[name].value = val;
    tempState = tempFormData;
    dispatch({
      type : 'commonUpdate',
      payload : tempState
    })
  }

  const login = () => {
      let count=0;
      for(let i=0;i<creditionals.length;i++){
        if(state.formData['username'].value === creditionals[i].username && 
        state.formData['password'].value === creditionals[i].password){
          setBoolean(false)
          setAuthStatus('Nikhil')
          count++;
        }else{
          continue;
        }
      }
      if(count==0){
        setBoolean(true);
      }
  }
  return (
    <AuthContext.Provider value={{status:authStatus}}>
    <ImageBackground source={drusya} resizeMode="cover" style={styles.image}>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.loginBox}>
        <View style={{flex:0.9,alignItems : 'center',justifyContent : 'center'}}>
          {/* <Text style={styles.logoTxt}>Login</Text> */}
          <Image 
            source={{uri:'https://pngimg.com/uploads/birds/birds_PNG49.png'}}
            style={{width:300,height:300,resizeMode:'center'}}
          />
        </View>
        <View style={{width:'90%',alignSelf:'center'}}>
          <TextInput 
            placeholder='Username'
            style={styles.textInput}
            placeholderTextColor={'grey'}
            value={state.formData.username.value}
            onChangeText={(val) => changeText('username',val)}
          />
          <TextInput 
            placeholder='Password'
            style={styles.textInput}
            placeholderTextColor={'grey'}
            value={state.formData.password.value}
            onChangeText={(val) => changeText('password',val)}
            secureTextEntry={true}
            maxLength={12}
          />
        </View>
        {boolean ?
        <View style={styles.errorMsg}>
          <Image 
            source={{uri:'https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png'}}
            style={{width:30,height:30}}
          />
          <Text style={styles.errorMsgTxt}>Please check the creditionals.</Text>
        </View> : null
        }
        <View style={{marginTop : 20}}>
          <TouchableOpacity style={styles.primaryButton} onPress={login}>
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}} >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </ImageBackground>
    </AuthContext.Provider>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  loginBox : {
    flex : 1,
    backgroundColor : '#000000c0'
  },
  logoTxt : {
    fontSize : 50,
    color : 'white',
  },
  primaryButton : {
    //width : 300,
    //marginHorizontal : 20,
    width : '90%',
    height : 40,
    //backgroundColor : 'red',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 5,
    alignSelf:'center',
    borderColor : '#ffe4b5',
    borderWidth : 1,
    marginTop : 20
  },
  secondaryButton : {
    width : '90%',
    height : 40,
    backgroundColor : 'red',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 5,
    alignSelf:'center',
    borderColor : 'red',
    borderWidth : 1,
    marginTop : 20
  },
  textInput : {
    borderBottomWidth : 1,
    borderBottomColor : 'white',
    fontSize : 18,
    color : 'white',
    fontFamily : 'monospace',
    marginTop : 10
  },
  errorMsg : {
    //position:'absolute',
    //bottom : 0,
    width : '90%',
    backgroundColor : '#FFDCD1',
    height : 60,
    alignSelf : 'center',
    marginTop : 10,
    alignItems:'center',
    //justifyContent : 'center',
    flexDirection : 'row',
    paddingHorizontal : 10,
    borderRadius : 5
  },
  errorMsgTxt : {
    color : 'red',
    fontSize : 15,
    marginLeft : 10,
    fontWeight : 'bold',
    fontFamily : 'monospace'
  }
})
