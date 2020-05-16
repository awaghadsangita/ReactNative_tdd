import React from 'react';
import { TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:"test",
    }
  }
  change(x){
    this.setState({data:x*10});
  }
  render(){
  return (
    <View style={{flex:1,justifyContent:'center'}}>
        <TextInput
        testID={'username'}
        onChangeText={(text)=>this.change(text)}
        style={{backgroundColor:'gray',marginBottom:15}}
        placeholder="Enter Username"/>
     
        <TextInput
        testID={'password'}
        onChangeText={(text)=>this.change(text)}
        style={{backgroundColor:'gray',marginBottom:15}}
        placeholder="Enter Password"/>
     
    </View>
  );
}  
}