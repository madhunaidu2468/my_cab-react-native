import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyHeader from './MyHeader';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MyHeader  navigation={this.props.navigation}/>
      <View style={styles.bodyContainer}>
       <Text>About Screen</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  bodyContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    width:20,
    height:20
  }
});