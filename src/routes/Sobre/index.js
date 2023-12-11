import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
export default function Sobre() {

  return (
    <View style={styles.container}>
      <View style={styles.desctxtv}>
        <TouchableOpacity style={[styles.buttom, {marginTop:0}]}>
          <Fontisto
          name='persons'
          size={20}
          color={'#FFF'}
          style={{marginLeft:20, marginTop:2}}
          />
          <Text style={{fontSize:20, color:'#FFF', paddingLeft:10}}>Sobre nós</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttom}>
          <Image
            source={require('./mosquito-svgrepo-com.png')}
            style={{width:30, height:30, marginLeft:20}}
          />
          <Text style={{fontSize:20, color:'#FFF', paddingLeft:10}}>Cuidados com o Aedes</Text>
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
