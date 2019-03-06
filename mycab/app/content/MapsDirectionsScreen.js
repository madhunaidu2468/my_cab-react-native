import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default class MapsDirectionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: []
    }
  }

  render() {
    const GOOGLE_MAPS_APIKEY = 'google-api-key';
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          minZoomLevel={12}
          initialRegion={{
            latitude: 37.8025259,
            longitude: -122.4351431,
            latitudeDelta: 0.40,
            longitudeDelta: 0.40,
          }}>

          <Marker coordinate={{ latitude: 37.8025259, longitude: -122.4351431 }}></Marker>
          <Marker coordinate={{ latitude: 37.7896386, longitude: -122.421646 }}></Marker>

          <MapViewDirections
            origin={{ latitude: 37.8025259, longitude: -122.4351431 }}
            destination={{ latitude: 37.7896386, longitude: -122.421646 }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="blue"
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  calloutView: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    width: "50%",
    marginLeft: "35%",
    marginRight: "35%",
    marginTop: "20%"
  },
  calloutSearch: {
    borderColor: "transparent",
    marginLeft: 20,
    width: "90%",
    height: 40,
    borderWidth: 0.0
  },
  pinView: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'blue',
  },
  pinText: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  pinImage: {
    flex: 1,
  },
});