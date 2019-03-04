import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  },
  drawermenuimage: {
    height: 100,
    width: 100,
    marginLeft: 10,
    borderRadius: 30
  },
  drawermeniview: {
    height: 110,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  drawername: {
    fontWeight: 'bold',
    paddingLeft: 10
  },
  drawermobno: {
    fontWeight: 'bold',
    paddingLeft: 10
  },
  drawermenutext: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;

