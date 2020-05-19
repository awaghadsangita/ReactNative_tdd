import React from 'react';
import { View, StyleSheet,Text,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      resultText1:""
    }
  }
  pressButton(text){
    if(text=="="){
        return this.calculatResult();
    }
    this.setState({
      resultText1:this.state.resultText1+text
    })
  }
  calculatResult(){

  }
  operation(operation){
    switch(operation){
      case 'D':{
          let text=this.state.resultText1.split('');
          text.pop();
          this.setState({resultText1:text.join('')})
      }
    }
  }
  render() {
    let rows=[]
    let numbers=[[1,2,3],[4,5,6],[7,8,9],[0,".","="]]
    for(let i=0;i<4;i++){
        let row=[]
      for(let j=0;j<4;j++){
        row.push(<TouchableOpacity 
                  onPress={()=>this.buttonPress(numbers[i][j])}
                  style={styles.btn}>
              <Text style={styles.btnText}>{numbers[i][j]}</Text>
            </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    let ops=["D","/","*","-","+"];
    let opsColumn=[]
    for(let i=0;i<5;i++){
      opsColumn.push(<TouchableOpacity
                        onPress={()=>this.operation(ops[i])} 
                        style={styles.btn}>
                        <Text style={styles.white}>{ops[i]}</Text>
                    </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}><Text style={styles.resultText}>{this.state.resultText1}</Text></View>
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
