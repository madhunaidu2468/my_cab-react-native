import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 20,
  },
  listContainer: {
    margin: 5,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5
  },
  orderContainer: {
    marginLeft: 10,
    marginTop: 5
  },
  addressContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  arrowbox: {
    flex: 2,
    margin: 5,
  },
  addressbox: {
    flex: 5,
  },
  statusbox: {
    flex: 2
  },
  h1: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  h1_end: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 150
  },
  h2: {
    fontSize: 14,
    width: 180,
  },
});

export default styles;