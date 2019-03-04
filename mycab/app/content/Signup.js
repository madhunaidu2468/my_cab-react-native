/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, ImageBackground, Image, TouchableOpacity, TextInput, Button, View, Alert } from 'react-native';
import styles from '../styles/signup-styles'
import MyFooter from './MyFooter';

export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      mobNo: "",
      pswd: "",
      name: "",
      dob: ""
    }
  }

  submitSignupForm() {
    const { mobNo, pswd, dob, name } = this.state
    if (mobNo == '') {
      Alert.alert('Error', 'Mob No is mandatory')
    } else if (pswd == '') {
      Alert.alert('Error', 'pswd is mandatory')
    } else if (dob == '') {
      Alert.alert('Error', 'dob is mandatory')
    } else if (name == '') {
      Alert.alert('Error', 'name is mandatory')
    } else {
      this.props.navigation.navigate('Home')
    }
  }

  login() {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/background.png')} style={{ flex: 1, width: null, height: null, }}>
          <Image source={require('../images/logo.png')} style={styles.logo}></Image>

          <View style={styles.placeholderView}>
            <TextInput style={styles.textInput} placeholder="Mob No" placeholderTextColor='grey' onChangeText={text => this.setState({ mobNo: text })}></TextInput>
          </View>

          <View style={styles.placeholderView}>
            <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='grey' onChangeText={text => this.setState({ pswd: text })}></TextInput>
          </View>

          <View style={styles.placeholderView}>
            <TextInput style={styles.textInput} placeholder="dob(dd/mm/yyyy)" placeholderTextColor='grey' onChangeText={text => this.setState({ dob: text })}></TextInput>
          </View>

          <View style={styles.placeholderView}>
            <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor='grey' onChangeText={text => this.setState({ name: text })}></TextInput>
          </View>

          <View style={styles.buttonView}>
            <Button style={styles.submitButton} onPress={() => this.submitSignupForm()} title="Register"></Button>
            <TouchableOpacity onPress={() => this.login()} style={{ marginTop: 20 }}><Text>Login</Text></TouchableOpacity >
          </View>
          <MyFooter />
        </ImageBackground>
      </View>
    );
  }
}
