import {StyleSheet, Dimensions} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex: 1,
      },mapContainer: {
        flex: 1,
      },
      map: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }
});

export default styles;