import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions, Modal } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { MapView } from 'expo';

import AddBirdForm from './AddBirdForm';

export default class CatchMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBird: false,
      markers: [],
    };
  }

  componentDidMount() {
    const res = fetch('https://www.xeno-canto.org/api/2/recordings?query=cnt:belgium');
    res.then(data => data.json()).then(data => {
      this.setState({ 
        markers: data.recordings
      })
    });
  }

  render() {
    return (
      <View>
        <MapView 
          style={{ height: Dimensions.get('window').height }}
          initialRegion={{
            latitude: 50.4974444,
            longitude: 4.5,
            latitudeDelta: 0,
            longitudeDelta: 4,
          }}
        >
          {
            this.state.markers.map((marker, index) => {
              if(marker.lat && marker.lng) {
                return (
                  <MapView.Marker
                    coordinate={{latitude: parseFloat(marker.lat), longitude: parseFloat(marker.lng)}}
                    title={marker.en}
                    description={ marker.loc + ', ' + marker.cnt }
                    key={marker.en + index}
                  />
                )
              }
            })
          }
        </MapView>
        <View style={{position: "absolute", bottom: 70, left: 0, width: Dimensions.get('window').width}} >
          <Button 
            title="AJOUTER UNE PRISE" 
            icon={{ name: 'add' }} 
            backgroundColor="#3478f6"
            onPress={ () => this.setState({ showAddBird: true }) }
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showAddBird}
          onRequestClose={() => {
            this.setState({ showAddBird: false })
          }}>
          <ScrollView style={{marginTop: 22}}>
            <Button
              icon={{ name: 'close' }}
              backgroundColor="red"
              onPress={() => {
                this.setState({ showAddBird: false });
              }}
            />
            <AddBirdForm />
          </ScrollView>
        </Modal>
      </View>
    );
  }
}
