import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/home-styles';
import MapView from 'react-native-maps';

export default class MyHomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initialRegion: {
                latitude: 12.899305,
                longitude: 77.634118,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        }
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
            this.setState({ initialRegion: initialRegion })
        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    }

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.mapContainer}>
                        <MapView style={styles.map}
                            initialRegion={this.state.initialRegion}
                            showsUserLocation={true}>
                        {!!this.state.initialRegion.latitude && !!this.state.initialRegion.longitude && <MapView.Marker
                            coordinate={{ "latitude": this.state.initialRegion.latitude, "longitude": this.state.initialRegion.longitude }}
                            title={"Your Location"}
                        />}
                        </MapView>
                </View>
            </View>
        );
    }
}