import React, { Component } from 'react';
import BirdsList from '../components/BirdsList';
import Bird from '../components/Bird';

import { createStackNavigator } from 'react-navigation';

import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const EncyclopediaStackNavigation = createStackNavigator({
  BirdsList: BirdsList,
  Bird: Bird,
})

class EncyclopediaScreen extends Component {
  render() {
    return (
      <EncyclopediaStackNavigation />
    );
  }
}

export default EncyclopediaScreen;