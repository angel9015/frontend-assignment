import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import CarContainer from './app/containers/car-container/car-container';

const store = configureStore({});

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {/* <StatusBar style="auto" /> */}
    //   <Button title='Click me!'></Button>
    // </View>
    <Provider store={store}>
      <CarContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
