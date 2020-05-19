import React from 'react';
import { View, StyleSheet,Button,Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}><Text style={styles.resultText}>11*11</Text></View>
        <View style={styles.calculation}><Text style={styles.calculationText}>121</Text></View>
        <View style={styles.button}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
          </View>
          <View style={styles.operations}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  row:{
    flexDirection:"row",
    flex:1,
    justifyContent:"space-around",
    alignItems:"stretch",  
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
  },
  resultText:{
    fontSize:30,
    color:"black",
    textAlign:"right",
    paddingTop:80
  },
  calculation:{
    flex:1,
    backgroundColor:"white",
  },
  calculationText:{
    fontSize:40,
    color:"gray",
    textAlign:"right"
  },
  button:{
    flex:7,
    flexDirection:"row"
  },
  numbers:{
    flex:3,
    backgroundColor:"yellow"
  },
  operations:{
    flex:1,
    justifyContent:"space-around",
    backgroundColor:"black"
  }  
});

