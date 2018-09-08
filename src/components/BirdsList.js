import React, { Component } from 'react';
import { View , Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, Card, SearchBar } from 'react-native-elements';

export default class BirdList extends Component {
  static navigationOptions = {
    title: 'Encyclopédie',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      birds: [],
      filteredBirds: [],
    };
  }

  componentDidMount(){
    const res = fetch('https://ebird.org/ws2.0/ref/taxonomy/ebird?fmt=json&locale=fr&cat=species');
    res.then(data => data.json()).then(data => {
      this.setState({ 
        birds: data,
        filteredBirds: data,
        isLoading: false,
      })
    });    
  }

  filterBirds(search) {
    let birds = this.state.birds;
    this.setState({ 
      filteredBirds: birds.filter((bird) => {
        return bird.comName.indexOf(search) > -1;
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <View>
          <SearchBar 
            placeholder="Chercher un oiseau"
            onChangeText={(search) => this.filterBirds(search)}
          />
        </View>
        <Card>
          <FlatList
            data={this.state.filteredBirds}
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
