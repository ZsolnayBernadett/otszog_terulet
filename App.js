/*
* File: App.js
* Author: Zsolnai Bernadett
* Copyright: 2022, Zsolnai Bernadett
* Date: 2022-01-10
*
*/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

export default function App() {

const[side, setSide] = useState();
const[terulet, setTerulet] = useState();

function handleCalcButton(){

  let terulet = (Math.sqrt(25+10*Math.sqrt(5))/4 * Math.pow(side,2));
  setTerulet(terulet.toFixed(2));
}

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Pentagon területszámítás</Text>
      <Text>Zsolnai Bernadett</Text>
      <Text>2022.01.10</Text>

      <Text style={styles.sideform}>A oldalhosszúság</Text>
      <TextInput style={styles.input} onChangeText = {side => setSide(side)}/>

      <TouchableHighlight
          style={styles.runButton}
          onPress={handleCalcButton}
          >
          <Text style={styles.runText}>Számol</Text>
      </TouchableHighlight>

      <Text style = {styles.result}>Terület: {terulet}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },

  title:{
    fontWeight: 'bold',
    fontSize: 25,
    color: 'yellow',
    marginBottom: 10,
  },

  sideform:{
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: '50%',
    marginTop: 10,
    color: 'white',
  },

  runText:{
    color: 'orange',
    padding:10,
    fontWeight: 'bold',
    fontSize: 20,
  },

  runButton:{
    backgroundColor: 'blue',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
  },

  result:{
    color: 'white',
    padding:10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
