import React, { Component } from 'react';
import { View , Text, FlatList } from 'react-native';

export default class BirdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: [],
    };
  }

  componentDidMount(){
    const res = fetch('https://www.xeno-canto.org/api/2/recordings?query=cnt:belgium');
    res.then(data => data.json()).then(data => {
      this.setState({ 
        birds: data.recordings.map((bird, index) => {
          bird.key = 'bird' + index + bird.en;
          return bird;
        }) 
      })
    });    
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.birds}
          renderItem={({item}) => (
            <Text onPress={() => this.props.navigation.navigate('Bird', { bird: item })}>
              { item.en }
            </Text>
          )}
        />
      </View>
    );
  }
}
