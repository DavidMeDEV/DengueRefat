import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './src/routes/home';
import Inicial from './src/routes/Inicial';
import Mapa from './src/routes/Mapa';

export default function App() {
  const tabs=createBottomTabNavigator();
  const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown:false }}
        />
      
        <Stack.Screen
          name='Inicial'
          component={Inicial}
          options={{ headerShown:false }}
          
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
