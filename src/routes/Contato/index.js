import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Contato() {
 return (
   
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://www.instagram.com/if_dengue/')}}>
            <View style={styles.instacontainer}>
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Fontisto name='instagram' size={50} color='white' />
                    <Text style={styles.insta}>Instagram</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
 );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#46a24f'
    },
    insta:{
        fontSize:23,
        color:'#fff',
       // backgroundColor:'#fff',
        
    },
    instacontainer:{
    
        width:150,
        height:150,
        backgroundColor:'#be0700',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        borderWidth:2
    }
})