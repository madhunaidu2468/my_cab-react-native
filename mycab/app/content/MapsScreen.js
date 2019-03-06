import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class MapsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: this.props.state.region.latitude,
        longitude: this.props.state.region.longitude,
        latitudeDelta: this.props.state.region.latitudeDelta,
        longitudeDelta: this.props.state.region.longitudeDelta
      },
      markers: this.props.state.markers
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ markers: props.state.markers })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
      this.setState({ region: initialRegion })
    },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          minZoomLevel={14}
          region={this.state.region}
          showsUserLocation={true}
        >

          {!!this.state.region.latitude && !!this.state.region.longitude && <MapView.Marker
            coordinate={{ "latitude": this.state.region.latitude, "longitude": this.state.region.longitude }}
            title={"Your Location"}
          />}

          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
            >
              <View style={styles.pinView}>
                <Text style={styles.pinText}>{marker.title}</Text>
                <Image style={styles.pinImage} source={require('../icons/sedan.png')}></Image>
              </View>
            </Marker>
          ))}
        </MapView>

        <Callout>
          <View style={styles.calloutView} >
            <GooglePlacesAutocomplete
              placeholder='Enter Destination'
              minLength={2}
              autoFocus={false}
              returnKeyType={'default'}
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              getDefaultValue={() => ''}
              query={{
                key: 'google-api-key',
                language: 'en', // language of the results
              }}
              styles={{
                textInputContainer: {
                  width: '100%'
                },
                textInput: {
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: 'white'
                },
              }}
              currentLocation={false}
            />
          </View>
        </Callout>
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