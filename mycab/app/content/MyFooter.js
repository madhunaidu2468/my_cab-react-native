import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/footer-styles';

export default class MyFooter extends React.Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <Text>Copyright 2018</Text>
      </View>
    );
  }
}
