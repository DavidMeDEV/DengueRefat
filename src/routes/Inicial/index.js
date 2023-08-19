import React from "react";
import {Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Mapa from "../Mapa";
import Sobre from "../Sobre";

export default function Inicial(){
 const tabs=createBottomTabNavigator();
  return(
     <tabs.Navigator>
        <tabs.Screen
            name="Mapa"
            component={Mapa}
        />
        <tabs.Screen
            name="Sobre"
            component={Sobre}
        />
        <tabs.Screen/>
     </tabs.Navigator>
      
      
     
    
  )  
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }

})