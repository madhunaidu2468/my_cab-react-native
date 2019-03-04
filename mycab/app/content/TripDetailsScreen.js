import React, { Component } from 'react';
import { View, Image, Button, Text } from 'react-native';
import styles from '../styles/tripdetails-styles';
import MapsDirectionsScreen from './MapsDirectionsScreen';
import Moment from 'moment';

export default class TripDetailsScreen extends Component {
  date = Moment(this.props.navigation.state.params.date).format('d MMM YYYY')
  cost = this.props.navigation.state.params.cost
  driverName = this.props.navigation.state.params.driverName
  status = this.props.navigation.state.params.status
  startTime = this.props.navigation.state.params.startTime
  endTime = this.props.navigation.state.params.endTime
  fromAddress = this.props.navigation.state.params.fromAddress
  toAddress = this.props.navigation.state.params.toAddress
  driverRating = this.props.navigation.state.params.driverRating

  getStatusIcon() {
    if (this.status == 'active') {
      return require('../icons/active.png')
    } else if (this.status == 'cancelled') {
      return require('../icons/cancelled.png')
    } else if (this.status == 'completed') {
      return require('../icons/ended.png')
    }
  }

  getInvoiceButton() {
    if (this.status == 'completed') {
      return (
        <View style={styles.tabContainer}>
          <Button title="Email Invoice" onPress={() => this.emailInvoice()}></Button>
        </View>
      );
    }
  }

  emailInvoice() {
    alert('Invoice sent to registered email')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapsDirectionsScreen />
        </View>

        <View style={styles.tabsContainer}>

          <View style={styles.tabContainer}>
            <Text style={styles.h1}> {this.date} </Text>
            <Text style={styles.h1_end}> {this.cost}Rs </Text>
          </View>

          <View style={styles.tabContainer}>
            <Text style={styles.h1}> {this.driverName}</Text>
            <Text style={styles.h1_end}> {this.driverRating}</Text>
          </View>

          <View style={styles.tabContainer}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text numberOfLines={1} style={styles.h1}> {this.startTime}  {this.fromAddress}</Text>
              <Text numberOfLines={1} style={styles.h1}> {this.endTime}  {this.toAddress}</Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Image source={this.getStatusIcon()} style={{ width: 40, height: 40, marginRight: 5 }}></Image>
            </View>
          </View>

          {this.getInvoiceButton()}
        </View>
      </View>
    );
  }
}
