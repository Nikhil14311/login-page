import { View, Text, Button } from 'react-native'
import React from 'react'
import { PermissionsAndroid } from 'react-native';
import Contacts, { getContactById } from 'react-native-contacts';


const ContactAcc = () => {

    const [data, setData] = React.useState({})


    const getContact = async() => {
        console.log('er')
        try{
            console.log("er1")
            const permission = await PermissionsAndroid.request(
                // PermissionsAndroid.PERMISSIONS.READ_CONTACTS
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            )
            if(permission === 'granted'){
                const contacts = await Contacts.getAll();
                console.log('contacts>>>',contacts);
            }
        }
        catch(e){
            console.log(e);
        }
        //console.log(data);
    };

    // const { data } = await Contacts.getContactsAsync({
    //     fields: [Contacts.Fields.Emails],
    // });
    
    // if (data.length > 0) {
    //     const contact = data[0];
    //     console.log(contact);
    // }
  return (
    <View style={{flex:1}}>
      <Text>ContactAcc</Text>
      <Button 
        title = {"Conatact"}
        onPress={()=>getContact()}
      />
    </View>
  )
}

export default ContactAcc
