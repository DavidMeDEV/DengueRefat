import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navi = useNavigation()
    return (

        <View style={styles.container}>
            <View style={{flex:1, marginTop:200, alignItems:"center", justifyContent:"center"}}>
                <View>
                    <Text style={[styles.txt]}>IFMA - Contra a Dengue</Text>
                </View>

                <Image
                    source={require('../../img/1465062-ffffff.png')}
                    style={{ width: 200, height: 200 }}
                />

                <TouchableOpacity style={styles.toContainer} onPress={() => navi.navigate('Inicial')}>
                    <View>
                        <Text style={styles.txtbot}>ENTRAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ height: 200, width: '100%', alignItems:"flex-end", justifyContent:"flex-end"}}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../img/ifma.png')}
                        style={[{ width: 35, height: 35 }]}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46a24f'
    },
    toContainer: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1.5,
        borderRadius: 20,
        //borderColor:'',
        backgroundColor: '#be0700',

    },
    txtbot: {
        padding: 10,
        color: '#fff',
        fontSize: 18
    },
    txt: {

        fontSize: 30,
        fontWeight: "bold",
        color: '#fff',
        textShadowColor: '#be0700',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5, padding: 10, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#46a24f'

    },
    logo: {
        width:52,
        borderWidth: 2,
        borderRadius: 35,
        backgroundColor: '#fff',
        padding: 7,
        margin:10
    }

})