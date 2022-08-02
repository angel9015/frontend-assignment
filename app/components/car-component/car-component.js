// @flow

import React, { useEffect } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import styles from './styles';
import { Searchbar } from 'react-native-paper';

const getErrorMessage = () => (
  <Text style={styles.errorText}>
    An Error occured when fetching data
  </Text>
);

const getCarInfo = (carInfo, searchQuery) => {

    const carArray =  carInfo.filter(e1 => e1.car.indexOf(searchQuery) > -1 || e1.car_model.indexOf(searchQuery) > -1 || e1.car_model_year.toString().indexOf(searchQuery) > -1);

    return (
        <FlatList
            data={carArray}
            renderItem={({item}) => (
                <View style={styles.carItem} key={item.id}>
                    <View>
                        <Image
                            style={styles.carImage}
                            source={{
                                uri: `https://picsum.photos/200/300?random=${item.id}`, 
                            }}
                        />
                    </View>
                    <View style={styles.carDetails}>
                        <View style={styles.carInfo1}>
                            <Text>Make: {item.car}</Text>
                            <Text>Model: {item.car_model}</Text>
                            <Text>Color: {item.car_color}</Text>
                            <Text>Year: {item.car_model_year}</Text>
                        </View>
                        <View>
                            <Text>{item.price}</Text>
                        </View>
                    </View>
                </View>
            )}
        />
    )
}

const CarComponent = (props) => {
  const {
    isLoading,
    error,
    fetchData,
    carInfo,
  } = props;
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const hasCarData = Object.keys(carInfo).length;

  useEffect(() => {
    fetchData();
  }, [])
   
  return (
    <View style={styles.container}>
        {error ? getErrorMessage() : null}
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBar}
        />
        <View style={styles.loading}>
            {isLoading ? <ActivityIndicator /> : null}
        </View>
        {hasCarData ? getCarInfo(carInfo, searchQuery): null}
    </View>
  );
};

export default CarComponent;
