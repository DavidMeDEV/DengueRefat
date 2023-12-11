import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Contato() {
 return (
   
    <View style={styles.container}>
            <View style={styles.desctxtv}>
        <TouchableOpacity style={[styles.buttom, {marginTop:0}]} onPress={()=>{Linking.openURL('https://www.instagram.com/if_dengue/')}}    >
          <Fontisto
          name='instagram'
          size={20}
          color={'#FFF'}
          style={{marginLeft:20, marginTop:3}}
          />
          <Text style={{fontSize:20, color:'#FFF', paddingLeft:10}}>Instagram</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, width: '100%',
    backgroundColor: '#026014',
    alignItems: 'center',
    justifyContent: 'center',

  },
  desctxtv: {
    justifyContent:'center',
    width: '90%', height: '88%',
    backgroundColor: '#027017',
    borderWidth: 2,
    borderRadius: 20
  },
  buttom: {
    flexDirection: 'row',
    backgroundColor: '#be0700',
    borderWidth: 2,
    marginTop: 20,marginLeft: 20,
    width: '90%', 
    paddingVertical:10,
    borderRadius:13
  }

});