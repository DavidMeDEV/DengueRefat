import React, { useState, useRef, createRef } from 'react';
import { View, Text, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';
import PersonButtom from './Buttom'

const indices = [];
const AnimatedIMGback = Animated.createAnimatedComponent(ImageBackground)

const App = () => {

    const objeto = {
        Bairro: ['Vila Maranhão', 'Jacú', 'Centro',
            'Laranjeiras', 'Bom Jardin', 'Nova Açailândia', 'Ouro Verde'],
        Focos: '10',

    };

    const [panEnabled, setPanEnabled] = useState(false);

    const scale = useRef(new Animated.Value(1)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;

    const pinchRef = createRef();
    const panRef = createRef();

    const onPinchEvent = Animated.event([{
        nativeEvent: { scale }
    }],
        { useNativeDriver: true });

    const onPanEvent = Animated.event([{
        nativeEvent: {
            translationX: translateX,
            translationY: translateY
        }
    }],
        { useNativeDriver: true });

    const handlePinchStateChange = ({ nativeEvent }) => {
        // enabled pan only after pinch-zoom
        if (nativeEvent.state === State.ACTIVE) {
            setPanEnabled(true);
        }

        // when scale < 1, reset scale back to original (1)
        const nScale = nativeEvent.scale;
        if (nativeEvent.state === State.END) {
            if (nScale < 1) {
                Animated.spring(scale, {
                    toValue: 1,
                    useNativeDriver: true
                }).start();
                Animated.spring(translateX, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();

                setPanEnabled(false);
            }
        }
    };

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
            <GestureHandlerRootView style={{backgroundColor:'red', flex:1, width:'100%'}}>

                <PanGestureHandler
                    onGestureEvent={onPanEvent}
                    ref={panRef}
                    simultaneousHandlers={[pinchRef]}
                    enabled={panEnabled}
                    failOffsetX={[-1000, 1000]}
                    shouldCancelWhenOutside
                >
                    <Animated.View style={{backgroundColor:'red'}}>
                        <PinchGestureHandler
                            ref={pinchRef}
                            onGestureEvent={onPinchEvent}
                            simultaneousHandlers={[panRef]}
                            onHandlerStateChange={handlePinchStateChange}
                        >
                            <AnimatedIMGback
                                source={require('./mapa_acai.png')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    transform: [{ scale }, { translateX }, { translateY }]
                                }}
                               
                            >

                                <PersonButtom positX={0} positY={0} bairro={indices} brr={objeto.Bairro /*Vila Maranhão*/} fcs={10} index='0' />
                            </AnimatedIMGback>

                        </PinchGestureHandler>
                    </Animated.View>

                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
    );
};


export default App;