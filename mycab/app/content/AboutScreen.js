import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MyHeader from './MyHeader';
import styles from '../styles/about-styles';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} />
        <View style={styles.bodyContainer}>
          <Text>This is a test app developed by me.</Text>
        </View>
      </View>
    );
  }
}
