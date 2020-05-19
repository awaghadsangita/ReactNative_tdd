import React  from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class App extends React.Component {  
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>01</Text>
      </View>
      <View style={styles.keypad}></View>
      
    </View>
    );
}  
}
const styles= StyleSheet.create({
    container:{
      flex:1,
      paddingTop:40
    },
    result:{
      flex:2,
      backgroundColor:"black"
    },
    keypad:{
      flex:4,
      backgroundColor:"gray"  
    },
    resultText:{
     fontSize:48,
     color:"white",
     paddingTop:75,
     textAlign:"right"
     }
     })