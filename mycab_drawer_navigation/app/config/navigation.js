import React from 'react';
import {Image, SafeAreaView, View, Text, ScrollView} from 'react-native';
import MyHomeScreen from '../content/MyHomeScreen';
import MyTripsScreen from '../content/MyTripsScreen';
import AboutScreen from '../content/AboutScreen';
import {createAppContainer, createDrawerNavigator, DrawerItems} from 'react-navigation';
import styles from '../styles/navigation-styles';

const DrawerMenu = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.drawermeniview}>
          <Image source={require('../images/user.png')}
              style={styles.drawermenuimage}>
          </Image>
          <View style={styles.drawermenutext}>
          <Text style={styles.drawername}>User1</Text>
          <Text style={styles.drawermobno}>9988776655</Text>
          </View>  
      </View>

      <ScrollView>
          <DrawerItems {...props}>
          </DrawerItems>
      </ScrollView>
  </SafeAreaView>
)

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../icons/home.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  MyTrips: {
    screen: MyTripsScreen,
    navigationOptions: {
      drawerLabel: 'Trips',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../icons/trips.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../icons/about.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },  
  Logout: {
    screen: MyHomeScreen,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../icons/logout.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
},
{
  initialRouteName: 'Home',
  drawerBackgroundColor: 'grey',
  drawerPosition: 'left',
  drawerWidth: 250,
  drawerType : 'slide',
  contentOptions: {
    activeTintColor: 'red',
    inactiveTintColor :'black',
    activeBackgroundColor :'white'
  },
  contentComponent: DrawerMenu,
}
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default AppContainer