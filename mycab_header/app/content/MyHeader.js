import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/header-styles';
export default class MyHeader extends Component {

  render() {
  return (      
<View style={styles.headerContainer}>
<View style={styles.headerBox}>
<TouchableOpacity>
<Image source={require('../icons/menu.png')} style={styles.titleImageLeft}></Image>
</TouchableOpacity>

<Text style={styles.titleText}>My Cab</Text>

<TouchableOpacity>
<Image source={require('../icons/bell.png')} style={styles.titleImageRight}></Image>
</TouchableOpacity>
</View>
</View>

    );
  }
}
