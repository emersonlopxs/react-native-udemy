/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {

  state = {
    placeName: ''
  }

  placeNameChangeHandler = (value) => {
    // alert(value)
    console.log(value);
    this.setState({
      placeName: value
    })
  }

  render() {
    const { placeName } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.heading}>Welcome!</Text>
        </View>

        <View style={styles.inputView}>
        <TextInput 
          style={styles.input} 
          onChangeText={this.placeNameChangeHandler} 
          placeholder="enter your name" 
          value={placeName}
        />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    paddingTop: 50,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#4ad',
    
  },
  title: {
    marginBottom: 30,
    // color: '#fff'
  },
  heading: {
    // color: '#fff'
  },
  inputView: {
    width: '100%',
    // backgroundColor: '#4ba',
    alignItems: 'center',
    // paddingBottom: 100
  },
  input: {
    // backgroundColor: 'red',
    
    width: '80%',
    height: 30,
    paddingLeft: 20, 
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1
  }
});
