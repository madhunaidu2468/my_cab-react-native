import React from 'react';
import {Image, SafeAreaView, View, Text, ScrollView, TouchableHighlight} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from '../content/Login';
import Signup from '../content/Signup';
import Home from '../content/Home';

const MyStackNavigator = createStackNavigator({
  Login: {screen: Login,
    navigationOptions: {
      header: null
    }},
    Signup: {screen: Signup,
    navigationOptions: {
      header: null
    }},
    Home: {screen: Home,
    navigationOptions: {
      headerTitle : 'Home',
    }},
},{
  initialRouteName: 'Login'
});

const AppContainer = createAppContainer(MyStackNavigator);

export default AppContainer