import React from 'react';
import { Image, SafeAreaView, View, Text, ScrollView, TouchableHighlight } from 'react-native';
import MyHomeScreen from '../content/MyHomeScreen';
import MyTripsScreen from '../content/MyTripsScreen';
import { createAppContainer, createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import styles from '../styles/navigation-styles';
import Login from '../content/Login';
import Signup from '../content/Signup';
import TripDetailsScreen from '../content/TripDetailsScreen';
import UserDetailsScreen from '../content/UserDetailsScreen';
import AboutScreen from '../content/AboutScreen';
import MyNotificationsScreen from '../content/MyNotificationsScreen';

const DrawerMenu = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <TouchableHighlight onPress={() => props.navigation.navigate('UserDetails')}>
      <View style={styles.drawermeniview}>
        <Image source={require('../images/user.png')}
          style={styles.drawermenuimage}>
        </Image>
        <View style={styles.drawermenutext}>
          <Text style={styles.drawername}>Alexa</Text>
          <Text style={styles.drawermobno}>9845098450</Text>
        </View>
      </View>
    </TouchableHighlight>

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
          style={[styles.icon, { tintColor: tintColor }]}
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
          style={[styles.icon, { tintColor: tintColor }]}
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
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    }
  },
  Logout: {
    screen: Login,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../icons/logout.png')}
          style={[styles.icon, { tintColor: tintColor }]}
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
    drawerType: 'slide',
    contentOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'black',
      activeBackgroundColor: 'white'
    },
    contentComponent: DrawerMenu,
  }
);

const MyStackNavigator = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  TripDetails: {
    screen: TripDetailsScreen,
    navigationOptions: {
      headerTitle: 'Trip Details',
    }
  },
  UserDetails: {
    screen: UserDetailsScreen,
    navigationOptions: {
      headerTitle: 'User Details',
    }
  },
  Home: {
    screen: MyDrawerNavigator,
    navigationOptions: {
      header: null
    }
  },
  Notifications: {
    screen: MyNotificationsScreen,
    navigationOptions: {
      headerTitle: 'Notifications'
    }
  },
}, {
    initialRouteName: 'Login'
  });

const AppContainer = createAppContainer(MyStackNavigator);

export default AppContainer