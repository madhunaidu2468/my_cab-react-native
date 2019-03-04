import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white'
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  titleImageLeft: {
    width: 30,
    height: 25
  },
  titleImageRight: {
    width: 25,
    height: 25
  }
});

export default styles;