import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Bird extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const bird = this.props.navigation.getParam('bird');

    return (
      <View>
        <Text> {bird.en} </Text>
      </View>
    );
  }
}
