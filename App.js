import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/routes/home';
import Inicial from './src/routes/Inicial';

import Mapa from './src/routes/Mapa';
import Sobre from './src/routes/Sobre';
import Contato from './src/routes/Contato';

export default function App() {
  const tabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Inicial'
          component={Inicial}
          options={{headerBackVisible:false, headerShown: true, headerTitle:'Menu' , headerTintColor:'red', headerStyle:{backgroundColor:'#e5e5e0'}, headerShadowVisible:false}}

        />

        <Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ headerShown: true, headerTitle:'Detalhes', headerTintColor:'red', headerStyle:{backgroundColor:'#e5e5e0'}, headerShadowVisible:false}}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ headerShown: true, headerTintColor:'red', headerStyle:{backgroundColor:'#e5e5e0'}, headerShadowVisible:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
