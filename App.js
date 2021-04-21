import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import {createStackNavigator} from 'react-navigation';
// import Steps from './Components/Steps'

// const Rootstack = createStackNavigator({
//   Steps: Steps
// })

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image style={styles.image} source={require('./assets/solve_logo.png')} />
      <Text style={styles.title}>Solve</Text>
      <Text>On-Demand Virtual Shopping and Delivery</Text>
      <StatusBar style="auto"/>

      <Button title="Continue >"/>
      <Button title="Login >"/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

  image: {
    width: 150,
    height: 150
  },
});
