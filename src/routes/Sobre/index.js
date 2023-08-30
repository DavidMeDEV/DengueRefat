import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function Sobre() {

  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <View style={styles.desctxtv}>
        <Text style={styles.desctxt}>
        Somos estudantes do{'\n'} <Text style={{color:'#46f24f', textDecorationLine:'underline'}}>IFMA - Campus Açailândia</Text>{'\n'} e estamos entusiasmados em lançar nosso 
        aplicativo de monitoramento de focos de mosquito da dengue. 
        Este app é uma ferramenta poderosa para mapear bairros do município com possíveis focos de reprodução do mosquito,
        contribuindo para a prevenção da doença. 
        Junte-se a nós nesse esforço pela saúde da nossa comunidade.
        </Text>
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46a24f',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  desctxthd:{
    color:'white',
    fontSize:30,
    marginTop:70
  },
  desctxt:{
    color:'white',
    fontSize:23,
    marginTop:30,
    textAlign:'center'
  },
  desctxtv:{
    flex:1,
    marginHorizontal:10,
    marginBottom:200,
    marginTop:100,
    padding:20,
    backgroundColor:'#be0700',
    borderWidth:2,
    borderRadius:20
  }
  
});
