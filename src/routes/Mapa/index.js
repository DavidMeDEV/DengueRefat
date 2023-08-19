import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Mapa() {

  return (
    <View style={styles.container}>
        <Text>Mapa</Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
