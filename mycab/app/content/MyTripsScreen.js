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



  constructor() {
    super();
    this.state = {
      data: [{
        "date": "2019-01-01",
        "startTime": "10:00",
        "endTime": "11:00",
        "cost": 30,
        "tripId": 12341,
        "fromAddress": "No 1, 1st cross, E.city",
        "toAddress": "Forum mall, B.city",
        "tripType": "daily",
        "status": "active",
        "_id": "3088c15839c245049fa5adcbac5bc496"
      }, {
        "date": "2019-01-15",
        "startTime": "14:00",
        "endTime": "15:30",
        "cost": 45,
        "tripId": 12423,
        "fromAddress": "colourful office, 1st cross, colourful city",
        "toAddress": "no 1, abc colony, xyz city",
        "tripType": "daily",
        "status": "cancelled",
        "_id": "3088c15839c245049fa5adcbac5bc496"
      }, {
        "date": "2019-01-23",
        "startTime": "20:00",
        "endTime": "20:30",
        "cost": 20,
        "tripId": 12516,
        "fromAddress": "no1, 1st lane",
        "toAddress": "no2, 2nd lane",
        "tripType": "daily",
        "status": "active",
        "_id": "3088c15839c245049fa5adcbac5bc496"
      }, {
        "date": "2019-02-01",
        "startTime": "08:00",
        "endTime": "10:00",
        "cost": 55,
        "tripId": 12631,
        "fromAddress": "no1, my home",
        "toAddress": "no2, my office",
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
        <MyHeader navigation={this.props.navigation} />
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => this.getCustomView(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
