import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, imageContainer: {
    flex: 2,
  },
  bodyContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30
  },
  itemIcon: {
    width: 15,
    height: 15
  },
  editIcon: {
    width: 12,
    height: 12
  },
  h1: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  h2: {
    fontSize: 12,
  },
});

export default styles;

