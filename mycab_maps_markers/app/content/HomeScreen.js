import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native';
import styles from '../styles/home-styles';
import MapView, { Marker, Callout } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const mini = [{
    title: '3\nmin',
    coordinates: {
        latitude: 12.899844,
        longitude: 77.631634
    }
},
{
    title: '4\nmin',
    coordinates: {
        latitude: 12.902254,
        longitude: 77.629027
    }
}]

const sedan = [{
    title: '5\nmin',
    coordinates: {
        latitude: 12.905925,
        longitude: 77.632347
    }
},
{
    title: '6\nmin',
    coordinates: {
        latitude: 12.894442,
        longitude: 77.635421
    }
}]

const suv = [{
    title: '2\nmin',
    coordinates: {
        latitude: 12.899844,
        longitude: 77.631634
    }
},
{
    title: '7\nmin',
    coordinates: {
        latitude: 12.905925,
        longitude: 77.632347
    }
}]


export default class MyHomeScreen extends Component {



    constructor(props) {
        super(props);

        this.state = {
            initialRegion: {
                latitude: 12.899305,
                longitude: 77.634118,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: mini
        }
    }    

    createNewRide(){
        ToastAndroid.show('Trip created successfully!', ToastAndroid.SHORT);
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
                                    key: 'gogole-api-key',
                                    language: 'en', // language of the results
                                    //types: '(cities)' // default: 'geocode'
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


                <View style={styles.tabsContainer}>
                    <View style={styles.tabContainer}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => this.setState({ markers: mini })}>
                                <Text style={styles.minuteText}></Text>
                                <Image source={require('../icons/mini.png')}></Image>
                                <Text style={styles.cabTypeText}>Mini</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => this.setState({ markers: sedan })}>
                                <Text style={styles.minuteText}></Text>
                                <Image source={require('../icons/sedan.png')}></Image>
                                <Text style={styles.cabTypeText}>Sedan</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => this.setState({ markers: suv })}>
                                <Text style={styles.minuteText}></Text>
                                <Image source={require('../icons/suv.png')}></Image>
                                <Text style={styles.cabTypeText}>SUV</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.rideContainer}>
                        <TouchableOpacity onPress={() => this.createNewRide()}><Text style={styles.cabTypeButton}>Ride Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}