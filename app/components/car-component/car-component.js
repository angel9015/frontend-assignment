// @flow

import React, { useEffect } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

const getErrorMessage = () => (
  <Text style={styles.errorText}>
    An Error occured when fetching data
  </Text>
);

const CarComponent = (props) => {
  const {
    isLoading,
    error,
    fetchData,
    carInfo,
  } = props;
  
  const hasCarData = Object.keys(carInfo).length;

  useEffect(() => {
    fetchData();
  }, [])
   
  console.log(carInfo);
  console.log(hasCarData);
  
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? getErrorMessage() : null}
      <Button
        onPress={fetchData}
        title='Load Data'
      />
    </View>
  );
};

export default CarComponent;
