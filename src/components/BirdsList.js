import React, { Component } from 'react';
import { View , Text, FlatList } from 'react-native';
import { ListItem, Card, SearchBar } from 'react-native-elements';

export default class BirdList extends Component {
  static navigationOptions = {
    title: 'Encyclopédie',
  };

  constructor(props) {
    super(props);
    this.state = {
      birds: [],
    };
  }

  componentDidMount(){
    const res = fetch('https://ebird.org/ws2.0/ref/taxonomy/ebird?fmt=json&locale=fr&cat=species');
    res.then(data => data.json()).then(data => {
      this.setState({ 
        birds: data,
      })
    });    
  }

  render() {
    return (
      <View>
        <View>
          <SearchBar 
            placeholder="Chercher un oiseau"
          />
        </View>
        <Card>
          <FlatList
            data={this.state.birds}
            keyExtractor={(item, index) => item.comName + index}
            renderItem={({item}) => (
              <ListItem
                title={item.comName}
                onPress={() => this.props.navigation.navigate('Bird', { bird: item })}
              />
            )}
          />
        </Card>
      </View>
    );
  }
}
