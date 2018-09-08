import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import EncyclopediaScreen from './src/screens/EncyclopediaScreen';
import UsersScreen from './src/screens/UsersScreen';

import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
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
  Users: {
    screen: UsersScreen,
    navigationOptions: {
      tabBarLabel: 'Les utilisateurs',
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-contacts" size={24} />
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
