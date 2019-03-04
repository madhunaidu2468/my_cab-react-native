import {StyleSheet, Dimensions} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex: 1,
      },mapContainer: {
        flex: 4,
      },
      map: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      },
      tabsContainer: {
        flex: 1,
      },
      tabContainer: {
        flex: 1.5,
        flexDirection: 'row',
        margin: 1,
        backgroundColor: 'black',
      },
      buttonContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor :'black',
        borderWidth: 0.5,
        margin: 3,
        borderRadius: 150,
        backgroundColor: 'white',
      }, 
      rideContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor :'black',
        borderWidth: 1,
        backgroundColor: 'white',
      },
      cabTypeText: {
        color: 'black',
        fontSize: 10,
      },
      minuteText: {
        color: 'black',
        fontSize: 12
      },
      pinView: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'blue',
    },
    pinText: {
        flex:1,
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
    },
    pinImage: {
      flex:1,
    },
    calloutView: {
      //borderRadius: 10,
      width: "75%",
      marginLeft: "35%",
      marginRight: "20%",
      marginTop: "20%"
    },
});

export default styles;