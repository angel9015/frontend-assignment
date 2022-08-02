// @flow

import React, { useEffect } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import styles from './styles';
import { Searchbar } from 'react-native-paper';

const FilterComponent = (props) => {
  const {
    isLoading,
    error,
    fetchData,
    carInfo,
  } = props;
  
  console.log(carInfo)
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Filter By</Text>
        <View>
            
        </View>
    </View>
  );
};

export default FilterComponent;
