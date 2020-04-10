import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,Dimensions, ScrollView } from 'react-native';
import ToDo from './todo'

export default class App extends Component{
  state = {
    newTodo:'',
    gotTodo:[],
  };

  storeTodo = (text) => {
    this.setState({newTodo: text})
  };

  showTodo = () => {
    this.setState({gotTodo: this.state.gotTodo.concat(this.state.newTodo)})
    this.setState({newTodo: ''})
    
  }
  
  render(){
    const {newTodo} = this.state;
    return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'></StatusBar>
      <Text style={styles.title}>Better Day To-Do List</Text>

      <View style={styles.card}>
        <TextInput 
          placeholder={'Make your own day :)'} 
          style={styles.input}
          onChangeText={this.storeTodo}
          onSubmitEditing={this.showTodo}
          value = {newTodo}
          returnKeyType = {'done'}
          ></TextInput>

        <ScrollView style={styles.input}>
          {this.state.gotTodo.map(x => {return <ToDo content={x}></ToDo>})}
        </ScrollView>
      </View>
    </View>
  );
}
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9b3ff',
    alignItems: 'center',
  },

  title: {
    marginTop: 70,
    fontSize: 28,
    fontWeight: '200',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },

  card: {
    //flex: 1,
    height: height-155,
    backgroundColor: 'white',
    width: width-30,
    marginTop: 28,
    borderRadius: 4.5,
  },

  input: {
    padding: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }

});
