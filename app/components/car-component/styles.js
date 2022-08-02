import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40
  },
  loading: {
    flex: 1,
    justifyContent: 'center'
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  searchBar: {
    marginBottom: 20
  },
  carItem: {
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 30,
    padding: 20
  },
  carImage: {
    width: 80,
    height: 80,
    borderRadius: 5
  },
  carDetails: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  carInfo1: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
