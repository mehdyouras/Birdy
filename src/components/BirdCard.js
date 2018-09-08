import React, { Component } from 'react';
import { View, Text, Card } from 'react-native';

export default class BirdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>{ this.props.bird.en }</Text>
      </View>
    );
  }
}
