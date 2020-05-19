import React from 'react';
import { View, StyleSheet,Button,Text,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    let rows=[]
    let numbers=[[1,2,3],[4,5,6],[7,8,9],[0,".","="]]
    for(let i=0;i<4;i++){
        let row=[]
      for(let j=0;j<4;j++){
        row.push(<TouchableOpacity style={styles.btn}><Text style={styles.btnText}>{numbers[i][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    let ops=["/","*","-","+"];
    let opsColumn=[]
    for(let i=0;i<4;i++){
      opsColumn.push(<TouchableOpacity style={styles.btn}><Text style={styles.white}>{ops[i]}</Text></TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}><Text style={styles.resultText}>11*11</Text></View>
        <View style={styles.calculation}><Text style={styles.calculationText}>121</Text></View>
        <View style={styles.button}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
              {opsColumn}
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
  btn:{
    justifyContent:"center",
    alignItems:"stretch",
    alignSelf:"stretch",
  },
  white:{
    color:"white",
    fontSize:30,
    paddingLeft:35

  },
  btnText:{
    fontSize:30,
    textAlign:"center"
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
