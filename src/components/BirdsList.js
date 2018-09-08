import React, { Component } from 'react';
import { ScrollView, View, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, Card, Text, SearchBar } from 'react-native-elements';

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

  renderBirdsList() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator size={36} />
        </View>
      );
    } else if(!this.state.filteredBirds[0]) {
      return (
        <View>
          <Text>
            Aucun oiseau ne correspond à votre recherche
          </Text>
        </View>
      )
    }
    return (
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
    )
  }

  render() {
    return (
      <View>
        <View>
          <SearchBar 
            round
            placeholder="Chercher un oiseau"
            onChangeText={(search) => this.filterBirds(search)}
          />
        </View>
        <ScrollView>
          <Card>
            { this.renderBirdsList() }
          </Card>
        </ScrollView>
      </View>
    );
  }
}
