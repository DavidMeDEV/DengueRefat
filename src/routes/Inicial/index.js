import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


export default function Inicial(){
    const navi = useNavigation()
  return(
     <View style={styles.container}>
        
            <TouchableOpacity style={styles.buttom}  onPress={() => navi.navigate('Mapa')}>
                <View style={styles.buttomConfig}>
                    <Fontisto
                        name="map"
                        size={50}
                        color={'white'}
                    />
                    <Text style={styles.buttomtxt}>Mapa</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttom, {paddingHorizontal:18}]} onPress={() => navi.navigate('Sobre')}>
                <View style={styles.buttomConfig}>
                <MaterialIcons
                        name="description"
                        size={50}
                        color={'white'}
                    />
                    <Text style={styles.buttomtxt}>Sobre</Text>
                </View>
            </TouchableOpacity>
           
            <TouchableOpacity style={[styles.buttom, {paddingHorizontal:10}]} onPress={() => navi.navigate('Contato')}>
                <View style={styles.buttomConfig}>
                <MaterialIcons
                        name="phonelink-ring"
                        size={50}
                        color={'white'}
                    />
                    <Text style={styles.buttomtxt}>Contato</Text>
                </View>
            </TouchableOpacity>

           
           
     </View>
  )  
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46a24f'
    },
    buttom:{
        marginHorizontal:10,
        borderWidth:3,
        borderRadius:13,
        alignItems:"center",
        justifyContent:"center",
        padding:15,
        backgroundColor:'#be0700',
        marginBottom:20
    },
    buttomConfig:{
        alignItems:"center",
        justifyContent:"center",
        
    },
    buttomtxt:{
        color:'white',
        fontSize:20
    }
})