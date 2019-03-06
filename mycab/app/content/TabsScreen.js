import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from '../styles/home-styles';

export default class TabsScreen extends Component {

    createNewRide() {
        ToastAndroid.show('Trip created successfully!', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this.props.handler(mini)}>
                            <Text style={styles.minuteText}>2 min</Text>
                            <Image source={require('../icons/micro.png')}></Image>
                            <Text style={styles.cabTypeText}>Micro</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this.props.handler(sedan)}>
                            <Text style={styles.minuteText}>4 min</Text>
                            <Image source={require('../icons/mini.png')}></Image>
                            <Text style={styles.cabTypeText}>Sedan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this.props.handler(suv)}>
                            <Text style={styles.minuteText}>6 min</Text>
                            <Image source={require('../icons/sedan.png')}></Image>
                            <Text style={styles.cabTypeText}>SUV</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.rideContainer}>
                    <TouchableOpacity onPress={() => this.createNewRide()}>
                    <View >
                    <Text style={styles.cabTypeButton}>Ride Now</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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
  