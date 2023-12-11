import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated';
import PersonButtom from './Buttom.js'

const END_POSITION = 1000;

let currentX
let currentY
let currentScale



const indices = [];

export default function App() {

    const objeto = {
        Bairro: ['Vila Maranhão', 'Jacú', 'Centro',
            'Laranjeiras', 'Bom Jardin', 'Nova Açailândia', 'Ouro Verde'],
        Focos: '10',
    
    };  

    const [img, setImg] = useState(null)
    useEffect(() => {
        const loadImg = async () => {
            try {
                const imagem = require('./ppgas.jpg')
                setImg(imagem)
            } catch {

            }
        }
        loadImg()
        return () => {

        }
    }, [])

    const onLeft = useSharedValue(true);
    const onRight = useSharedValue(true);
    const positionX = useSharedValue(-250);
    const positionY = useSharedValue(-100);
    const lastPositionX = useSharedValue(-250);
    const lastPositionY = useSharedValue(-100);
    const scale = useSharedValue(1.5);
    const savedScale = useSharedValue(1);

    const AnimatedImgBack = Animated.createAnimatedComponent(ImageBackground)
    const pinchGesture = Gesture.Pinch()
        .onBegin((e) => {
            console.log(`começou=> valores saved:${savedScale.value}, 
        scale:${scale.value}, e:${e.scale}`)
        })
        .onUpdate((e) => {
            currentScale = e.scale * savedScale.value
            if (currentScale < 1.47) {
                scale.value = withTiming(1.47, { duration: 1000 })
            } else if (currentScale > 3.5) {
                scale.value = withTiming(3.5, { duration: 1000 })
            } else {
                scale.value = currentScale
            }
        })
        .onEnd(() => {
            savedScale.value = scale.value
        });

    const panGesture = Gesture.Pan()
        .onBegin((e) => {
            console.log(`começou=> valores lastpositionX:${lastPositionX.value}, 
            currentX:${currentX}, e:${e.translationX}`)
        })
        .onUpdate((e) => {
            currentX = lastPositionX.value + e.translationX;
            currentY = lastPositionY.value + e.translationY;
            if (currentX > 199) {
                positionX.value = withTiming(199, { duration: 1000 })
            } else
                if (currentX < -1856) {
                    positionX.value = withTiming(-1856, { duration: 1000 })
                } else {
                    positionX.value = currentX;
                }
            if (currentY > 245) {
                positionY.value = withTiming(245, { duration: 1000 })
            } else
                if (currentY < -577) {
                    positionY.value = withTiming(-577, { duration: 1000 })
                } else{
                    positionY.value = currentY;
                }




            // Atualize as variáveis de posição

            console.log(`X: ${positionX.value}, Y: ${positionY.value}`);

            // Salve os valores para uso posterior

        })
        .onEnd((e) => {
            lastPositionX.value = positionX.value;
            lastPositionY.value = positionY.value;

        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: positionX.value, }, { translateY: positionY.value, }, { scale: scale.value }],
    }));

    const composed = Gesture.Simultaneous(pinchGesture, panGesture)

    return (

        <GestureHandlerRootView style={{ flex: 1, width: '100%', backgroundColor:'#000'}}>
            {img ? <GestureDetector gesture={composed} >
                <AnimatedImgBack
                    source={img}
                    style={[styles.box, animatedStyle]} >
                    <PersonButtom positX={430} positY={310} bairro={indices} brr={objeto.Bairro /*Vila Maranhão*/} fcs={10} index='0'/>
                    <PersonButtom positX={520} positY={310} bairro={indices} brr={objeto.Bairro /*Jacu*/} fcs={100} index='1'/>
                    <PersonButtom positX={650} positY={400} bairro={indices} brr={objeto.Bairro /*Centro*/} fcs={50} index='2'/>
                    <PersonButtom positX={520} positY={420} bairro={indices} brr={objeto.Bairro /*Laranjeiras*/} fcs={45} index='3'/>
                    <PersonButtom positX={400} positY={510} bairro={indices} brr={objeto.Bairro /*Bonja*/} fcs={200} index='4'/>
                    <PersonButtom positX={300} positY={580} bairro={indices} brr={objeto.Bairro /*Nova Açailândia*/} fcs={5} index='5'/>
                    <PersonButtom positX={910} positY={710} bairro={indices} brr={objeto.Bairro /*Ouro Verde*/} fcs={10} index='6'/>
                </AnimatedImgBack>
            </GestureDetector>
                :
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%' }}>
                    <Text style={{ color: 'red', fontSize: 50 }}>Carregando Imagem</Text>
                </View>
            }

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        width: '200%', height: '130%',
        borderRadius: 20,
        marginBottom: 30,
        
    },
});