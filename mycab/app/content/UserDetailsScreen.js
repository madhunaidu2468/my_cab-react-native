import React, { Component } from 'react';
import { View, Image, Button, Text, Switch, TouchableOpacity, TextInput, TouchableHighlight, ToastAndroid } from 'react-native';
import styles from '../styles/userdetails-styles';
import ImagePicker from 'react-native-image-picker';

export default class UserDetailsScreen extends Component {

  constructor() {
    super();
    this.state = {
      name: "my name",
      age: 21,
      sex: "M",
      rating: 5,
      email: "me@email.com",
      mobNo: "9988776655",
      allowNot: true,
      sendOffers: true,
      nameedit: false,
      emailedit: false,
      mobNoedit: false,
      image: require('../images/user.png')
    }
  }

  toggleNotifications = (value) => {
    this.setState({ allowNot: value })
  }

  updateAction() {
    ToastAndroid.show('Details update successfully!', ToastAndroid.SHORT);
    this.setState({
      nameedit: false,
      emailedit: false,
      mobNoedit: false,
    })
  }

  updateImage() {
    const options = {
      title: 'Select Image',
      maxWidth: 800, maxHeight: 600,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          image: source,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableHighlight onPress={() => this.updateImage()} style={styles.imageContainer}>
            <Image source={this.state.image} style={{ flex: 1, width: null, height: null, }} />
          </TouchableHighlight>
        </View>

        <View style={styles.bodyContainer}>

          <View style={styles.tabContainer}>
            <Image source={require('../icons/user.png')} style={styles.itemIcon}></Image>
            <TextInput index style={styles.h1} editable={this.state.nameedit} value={this.state.name} onChangeText={(text) => this.setState({ name: text })} />
            <TouchableOpacity onPress={() => this.setState({ nameedit: true })}>
              <Image source={require('../icons/edit.png')} style={styles.editIcon}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContainer}>
            <Image source={require('../icons/email.png')} style={styles.itemIcon}></Image>
            <TextInput style={styles.h1} editable={this.state.emailedit}> {this.state.email} </TextInput>
            <TouchableOpacity onPress={() => this.setState({ emailedit: true })}>
              <Image source={require('../icons/edit.png')} style={styles.editIcon}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContainer}>
            <Image source={require('../icons/mobileedit.png')} style={styles.itemIcon}></Image>
            <TextInput style={styles.h1} editable={this.state.mobNoedit}> {this.state.mobNo} </TextInput>
            <TouchableOpacity onPress={() => this.setState({ mobNoedit: true })}>
              <Image source={require('../icons/edit.png')} style={styles.editIcon}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContainer}>
            <Text style={styles.h1}> Notify me </Text>
            <Switch thumbColor="green" value={this.state.allowNot} onValueChange={(val) => this.toggleNotifications(val)}></Switch>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={() => this.updateAction()} disabled={!this.state.nameedit && !this.state.emailedit && !this.state.mobNoedit}></Button>
        </View>
      </View>
    )
  }
}
