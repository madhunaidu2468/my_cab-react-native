import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/notification-styles';

export default class MyNotificationsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <Text>Notifications</Text>
        </View>
      </View>
    );
  }
}
