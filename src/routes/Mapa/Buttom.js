import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';

function guardarIndex(index, array) {

    array[0] = index;
}
export default function PersonButtom(props) {

    const [showAlert, setShowAlert] = useState(false);

    const [color, setColor] = useState('green');
        useEffect(()=>{
                let value=Number(props.fcs)
            if(value>50){
                setColor('red')
            } else if(value<=50&&value>=30){
                setColor('yellow')
            }else{
                setColor('green')
            }
        },[props.fcs])
        
    return (
        <>
            <TouchableOpacity style={[styles.viewop, { top: props.positX, left: props.positY, backgroundColor: color} ]}  pressRetentionOffset={1} onPress={() => { setShowAlert(!showAlert); guardarIndex(props.index, props.bairro) }}>
                <View></View>
            </TouchableOpacity>

            <View>
                <AwesomeAlert onDismiss={() => { setShowAlert(!showAlert) }} show={showAlert} title={props.brr[props.index]} message={`Focos: ${props.fcs}`} />
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewop: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 20,
        opacity: 0.4,
        position:'absolute',
        //zIndex:99
        //justifyContent:'center',alignItems:'center'
    }
});