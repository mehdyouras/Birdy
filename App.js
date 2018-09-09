import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import EncyclopediaScreen from './src/screens/EncyclopediaScreen';
import CatchScreen from './src/screens/CatchScreen';

import Icon from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase';


export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyAkUfnFMSFSWhKEMW5Pfdt2YfHlWXeQ0gE",
      authDomain: "birdy-75b29.firebaseapp.com",
      databaseURL: "https://birdy-75b29.firebaseio.com",
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <AppBottomTabNavigator />
    );
  }
}

const AppBottomTabNavigator = createBottomTabNavigator({
  Encyclopedia: {
    screen: EncyclopediaScreen,
    navigationOptions: {
      tabBarLabel: 'Encyclopédie',
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-book" size={24} />
      )
    }
  },
  Catch: {
    screen: CatchScreen,
    navigationOptions: {
      tabBarLabel: 'Les prises',
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-map" size={24} />
      )
    }
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


