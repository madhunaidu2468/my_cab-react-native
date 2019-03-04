import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 60,
  },
  placeholderView: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  buttonView: {
    margin: 20,
    alignItems: 'center'
  },
  placeholderImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10
  },
  textInput: {
    fontSize: 20,
  },
  loginButton: {
    fontSize: 20,
    marginLeft: 20,
    borderRadius: 5
  },
});

export default styles;