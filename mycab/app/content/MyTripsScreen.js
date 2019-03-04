import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/trip-styles';
import MyHeader from './MyHeader';
import Moment from 'moment';

export default class MyTripsScreen extends React.Component {

  openDetailsView(item) {
    this.props.navigation.navigate('TripDetails', item)
  }

  getCustomView(item) {
    const date = item.date + 'T' + item.startTime
    return (
      <TouchableOpacity onPress={() => this.openDetailsView(item)}>
        <View style={styles.listContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.h1}> {Moment(date).format('d-MMM hh:mm a')}</Text>
            <Text style={styles.h1_end}> {item.cost}Rs </Text>
          </View>

          <View style={styles.orderContainer}>
            <Text style={styles.h1}>Order No: {item.tripId}</Text>
          </View>

          <View style={styles.addressContainer}>
            <View style={styles.arrowbox}>
              <Image source={require('../icons/arrow.png')} style={{ height: 35, width: 35, alignSelf: 'center' }}></Image>
            </View>
            <View style={styles.addressbox}>
              <Text numberOfLines={1} style={styles.h2}>{item.fromAddress}</Text>
              <Text numberOfLines={1} style={styles.h2}>{item.toAddress}</Text>
            </View>
            <View style={styles.statusbox}>
              <Image source={this.getStatusIcon(item)} style={{ height: 35, width: 35, alignSelf: 'center' }}></Image>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  getStatusIcon(item) {
    if (item.status == 'active') {
      return require('../icons/active.png')
    } else if (item.status == 'cancelled') {
      return require('../icons/cancelled.png')
    } else if (item.status == 'completed') {
      return require('../icons/ended.png')
    }
  }

  componentDidMount = () => {
    fetch('http://192.168.0.103:5000/trip/list')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.list
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} />
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => this.getCustomView(item)}
          />
        </View>
      </View>
    );
  }
}
