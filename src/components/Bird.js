import React, { Component } from 'react';
import { ScrollView, Text, Linking, StyleSheet } from 'react-native';
import { List, ListItem, Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import { Audio, MapView } from 'expo';
export default class Bird extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('bird').comName,
    };
  };
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    Audio.Sound.create({ uri: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC280894-014%205%20Grote%20Canadese%20Gans%205%20Roep.mp3' }).then(({ sound, status }) => {
      this.birdSound = sound;
    })
  }

  componentWillUnmount() {
    this.birdSound.getStatusAsync().then(({ isLoaded }) => {
      if (isLoaded) {
        this.birdSound.pauseAsync().then(() => {
          this.birdSound.setPositionAsync(0).then(() => {});
        });
      }
    });
  }

  render() {
    const bird = this.props.navigation.getParam('bird');
    
    return (
      <ScrollView>
        {/* <Card>
          <MapView 
            liteMode
            style={styles.map}
            initialRegion={{
              latitude: parseInt(bird.lat),
              longitude: parseInt(bird.lng),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MapView.Marker
              coordinate={{latitude: parseInt(bird.lat), longitude: parseInt(bird.lng)}}
              title={bird.en}
            />
          </MapView>
        </Card> */}
        <Card>
          <List>
            <Text>
              Nom:
            </Text>
            <ListItem
              title={bird.comName}
              rightIcon={<Icon name="ios-paw" size={24} />}
            />
            <Text>
              Nom scientifique:
            </Text>
            <ListItem
              title={bird.sciName}
              rightIcon={<Icon name="ios-paw" size={24} />}
            />
            <Text>
              Famille:
            </Text>
            <ListItem
              title={bird.familySciName}
              rightIcon={<Icon name="ios-egg" size={24} />}
            />
            <Text>
              Ordre:
            </Text>
            <ListItem
              title={bird.order}
              rightIcon={<Icon name="ios-egg" size={24} />}
            />
            <Text>
              Chant:
            </Text>
            <Button
              icon={{name: 'play', type: 'font-awesome'}}
              onPress={() => this.birdSound.playAsync()}
            />
            <Button
              icon={{name: 'pause', type: 'font-awesome'}}
              onPress={() => this.birdSound.pauseAsync()}
            />
          </List>
        </Card>
        {/* <Button 
          title="Plus d'informations" 
          onPress={() => Linking.openURL(bird.url)}
        />   */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});
