import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainPage from '../Components/MainPage';
import PhoneAuth from '../Components/PhoneAuth';
import React from 'react';
import Counter from '../Components/Counter';
import ReduxPractice from '../../ReduxPractice';
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor:'white',
            tabBarLabelStyle: { fontSize: 14, fontWeight:'bold' },
            tabBarIndicatorStyle : { backgroundColor:'white' }
            //tabBarItemStyle: { width: 100 }
        }}
    >
        <Tab.Screen name="CHATs" 
            component={MainPage}
            options={{
                // tabBarStyle: { backgroundColor: 'black' },
                // tabBarActiveTintColor:'white'
            }}
        />
        <Tab.Screen name="STATUS" component={Counter}/>
        <Tab.Screen name="CALLS" component={ReduxPractice} />
    </Tab.Navigator>
  );
}
export default MyTabs
