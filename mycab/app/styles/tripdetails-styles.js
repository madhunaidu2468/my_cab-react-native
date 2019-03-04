import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, mapContainer: {
    flex: 2,
    backgroundColor: 'white',
  },
  tabsContainer: {
    flex: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20
  },
  icon: {
    width: 20,
    height: 20
  },
  h1: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 270
  },
  h1_end: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  h2: {
    fontSize: 12,
  },
  h3: {
    fontSize: 14,
  },
});

export default styles;

