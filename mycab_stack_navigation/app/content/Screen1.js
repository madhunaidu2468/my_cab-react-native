import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.bodyContainer}>
       <Text>Screen1</Text>
       <Button title="Go to Screen2" onPress={() => this.props.navigation.navigate('Screen2')}></Button>
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