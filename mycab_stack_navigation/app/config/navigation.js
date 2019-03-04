import React from 'react';
import {Image, SafeAreaView, View, Text, ScrollView, TouchableHighlight} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Screen1 from '../content/Screen1';
import Screen2 from '../content/Screen2';
import Screen3 from '../content/Screen3';

const MyStackNavigator = createStackNavigator({
  Screen1: {screen: Screen1,
    navigationOptions: {
      header: null
    }},
    Screen2: {screen: Screen2,
    navigationOptions: {
      header: null
    }},
    Screen3: {screen: Screen3,
    navigationOptions: {
      headerTitle : 'Screen3',
    }},
},{
  initialRouteName: 'Screen1'
});

const AppContainer = createAppContainer(MyStackNavigator);

export default AppContainer