import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/header-styles';
export default class MyHeader extends Component {

  render() {
    const navigate = this.props.navigation;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerBox}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Image source={require('../icons/menu.png')} style={styles.titleImageLeft}></Image>
          </TouchableOpacity>

          <Text style={styles.titleText}>My-Cab</Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
            <Image source={require('../icons/bell.png')} style={styles.titleImageRight}></Image>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
