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
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    borderRadius: 5,
    borderColor: '#d8d8d8',
    borderWidth: 1,
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
    height: 120,
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  carDetails: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  carDetailTxt: {
    fontWeight: 'bold'
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  availableStatus: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    marginRight: 5
  },
  notAvailableStatus: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginRight: 5
  },
  carInfo1: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  title2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  carList: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
        width: 2,
        height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: 'white'
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20
  },
  modalView: {
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 20
  }
});
