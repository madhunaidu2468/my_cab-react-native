/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, TextInput, Button, View, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/login-styles';
import MyFooter from './MyFooter';

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      mobNo: "",
      pswd: ""
    }
  }

  submitLoginForm() {
    const { mobNo, pswd } = this.state
    if (mobNo == '') {
      Alert.alert('Error', 'Mob No is mandatory')
    } else if (pswd == '') {
      Alert.alert('Error', 'pswd is mandatory')
    } else if (mobNo != '123' && pswd != 'abc') {
      Alert.alert('Error', 'Invalid credentials')
    } else {
      this.props.navigation.navigate('Home')
    }
  }

  register() {
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/background.png')} style={{ flex: 1, width: null, height: null, }}>
          <Image source={require('../images/logo.png')} style={styles.logo}></Image>

          <View style={styles.placeholderView}>
            <Image source={require('../icons/mobile.png')} style={styles.placeholderImage}></Image>
            <TextInput style={styles.textInput} placeholder="Mob No" placeholderTextColor='grey' onChangeText={text => this.setState({ mobNo: text })}></TextInput>
          </View>

          <View style={styles.placeholderView}>
            <Image source={require('../icons/password.png')} style={styles.placeholderImage}></Image>
            <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='grey' secureTextEntry={true} onChangeText={text => this.setState({ pswd: text })}></TextInput>
          </View>

          <View style={styles.buttonView}>
            <Button style={styles.loginButton} onPress={() => this.submitLoginForm()} title="Login"></Button>
            <TouchableOpacity onPress={() => this.register()} style={{ marginTop: 20 }}><Text>Register Now</Text></TouchableOpacity >
          </View>
          <MyFooter />
        </ImageBackground>
      </View>
    );
  }
}
