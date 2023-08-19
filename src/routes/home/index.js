import React from "react";
import {Text, View, StyleSheet, Button} from 'react-native'

import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navi=useNavigation()
  return(
     
    <View style={styles.container}>
        <Text>funciona</Text>
        <Button
            title="mudar page"
            onPress={()=>navi.navigate('Inicial')}
        />
    </View>
  )  
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }

})