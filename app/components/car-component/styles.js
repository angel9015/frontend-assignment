import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
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
    borderColor: '#d8d8d8',
    borderWidth: 1,
    marginBottom: 30,
    padding: 20,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
        width: 2,
        height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: 'white'
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
