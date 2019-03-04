import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/trip-styles';
import Moment from 'moment';

export default class MyTripsScreen extends React.Component {

  openDetailsView(){
    console.warn('Open trip details screen. explained in next part');
  }

  getCustomView(item) {
    const date= item.date+'T'+item.startTime
    return (
      <TouchableOpacity onPress={() => this.openDetailsView()}>
        <View style={styles.listContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.h1}> {Moment(date).format('d-MMM hh:mm a')}</Text>
            <Text style={styles.h1_end}> {item.cost}$ </Text>
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

 

  constructor() {
    super();
    this.state = {
      data: [{
        "date": "2019-01-01",
        "startTime": "10:00",
        "cost": 20,
        "tripId": 123,
        "fromAddress": "no1, 1st lane",
        "toAddress": "no2, 2nd lane",
        "tripType": "daily",
        "status": "active",
        "_id": "3088c15839c245049fa5adcbac5bc496"
      }, {
        "date": "2019-01-01",
        "startTime": "10:00",
        "cost": 20,
        "tripId": 123,
        "fromAddress": "no1, 1st lane",
        "toAddress": "no2, 2nd lane",
        "tripType": "daily",
        "status": "cancelled",
        "_id": "3088c15839c245049fa5adcbac5bc496"
      }, {
        "date": "2019-01-01",
        "startTime": "10:00",
        "cost": 20,
        "tripId": 123,
        "fromAddress": "no1, 1st lane",
        "toAddress": "no2, 2nd lane",
        "tripType": "daily",
        "status": "active",
        "_id": "3088c15839c245049fa5adcbac5bc496"
      }, {
        "date": "2019-01-01",
        "startTime": "10:00",
        "cost": 20,
        "tripId": 123,
        "fromAddress": "no1, 1st lane",
        "toAddress": "no2, 2nd lane",
        "tripType": "daily",
        "status": "completed",
        "_id": "3088c15839c245049fa5adcbac5bc496"
      }
    ]
    
    }
  }

  render() {
    return (
      <View style={styles.container}>
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
