import React, { Component } from 'react';
import { View} from 'react-native';
import MyHeader from './MyHeader';
import MapsScreen from './MapsScreen';
import TabsScreen from './TabsScreen';
import styles from '../styles/home-styles';

export default class MyHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 12.899305,
        longitude: 77.634118,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: mini
    }
    this.handler = this.handler.bind(this)
  }

  handler(marker) {
    this.setState({
      markers: marker
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} />
        <View style={styles.bodyContainer}>
          <View style={styles.mapContainer}>
            <MapsScreen state = {this.state}/>
          </View>

          <View style={styles.tabsContainer}>
            <TabsScreen handler = {this.handler}/>
          </View>
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
