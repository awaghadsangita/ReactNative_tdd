import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
}  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
