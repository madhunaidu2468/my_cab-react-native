import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 10,
  }, mapContainer: {
    flex: 7,
    backgroundColor: 'white',
  },
  tabsContainer: {
    flex: 1.5,
  },
  tabContainer: {
    flex: 1.5,
    flexDirection: 'row',
    margin: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    margin: 3,
    borderRadius: 150,
    backgroundColor: 'white',
  },
  rideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
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
  icon: {
    width: 20,
    height: 20
  }
});

export default styles;

