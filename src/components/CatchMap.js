import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { MapView } from 'expo';

export default class CatchMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      </View>
    );
  }
}
