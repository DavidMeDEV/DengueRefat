import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, } from 'react-native';

import PersonButtom from './Buttom';



// Exemplo de uso
const indices = [];


export default function Mapa() {

    const objeto = {
        Bairro: ['Vila Maranhão', 'Jacú', 'Centro',
            'Laranjeiras', 'Bom Jardin', 'Nova Açailândia', 'Ouro Verde'],
        Focos: '10',
        
    };
  return (
    <View style={styles.container}>
        

        <ImageBackground source={require('./mapa_acai.png')} 
        style={styles.img}>
            
                <PersonButtom positX={135} positY={120} bairro={indices} brr={objeto.Bairro /*Vila Maranhão*/} fcs={10} index='0'/> 
                <PersonButtom positX={183} positY={120} bairro={indices} brr={objeto.Bairro /*Jacu*/} fcs={100} index='1'/>
                <PersonButtom positX={230} positY={180} bairro={indices} brr={objeto.Bairro /*Centro*/} fcs={50} index='2'/>
                <PersonButtom positX={190} positY={165} bairro={indices} brr={objeto.Bairro /*Laranjeiras*/} fcs={45} index='3'/>
                <PersonButtom positX={100} positY={215} bairro={indices} brr={objeto.Bairro /*Bonja*/} fcs={200} index='4'/>
                <PersonButtom positX={50} positY={235} bairro={indices} brr={objeto.Bairro /*Nova Açailândia*/} fcs={5} index='5'/>
                <PersonButtom positX={335} positY={305} bairro={indices} brr={objeto.Bairro /*Centro*/} fcs={10} index='6'/>
                
          
        </ImageBackground>

        
        
                 
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#46a24f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        top: 1, 
        width:600,
        height:400,
        transform: [{ rotate: '90deg' }],
        margin:115,
        flexWrap:'wrap' 
    }
});
