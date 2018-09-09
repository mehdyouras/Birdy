import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import CatchMap from '../components/CatchMap';

class CatchScreen extends Component {
  render() {
    return (
      <View>
        <CatchMap />
      </View>
    );
  }
}

export default CatchScreen;