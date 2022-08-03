import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import FilterComponent from '../filter-component/filter-component';
import styles from './styles';

const getErrorMessage = () => (
  <Text style={styles.errorText}>
    An Error occured when fetching data
  </Text>
);

const getCarInfo = (carInfo, searchQuery, makeFilters, yearFilters, colorFilters, yearSliderValue) => {

    // Search by make, model, year, color
    let carArray =  carInfo.filter(e1 => e1.car.indexOf(searchQuery) > -1 || e1.car_model.indexOf(searchQuery) > -1 || e1.car_model_year.toString().indexOf(searchQuery) > -1) || e1.car_color.indexOf(searchQuery) > -1;

    // filter by make, year, color
    if(makeFilters.length > 0) {
        carArray = carArray.filter(e1 => makeFilters.indexOf(e1.car) > -1)
    }

    if(yearFilters.length > 0) {
        carArray = carArray.filter(e1 => yearFilters.indexOf(e1.car_model_year) > -1)
    }

    if(colorFilters.length > 0) {
        carArray = carArray.filter(e1 => yearFilters.indexOf(e1.car_color) > -1)
    }
    
    // filter by year slider
    if(yearSliderValue.length === 2) {
        carArray = carArray.filter(e1 => e1.car_model_year >= yearSliderValue[0] && e1.car_model_year <= yearSliderValue[1])
    }

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
  const [makeFilters, setMakeFilters] = React.useState([]);
  const [yearFilters, setYearFilters] = React.useState([]);
  const [colorFilters, setColorFilters] = React.useState([]);
  const [yearSliderValue, setYSliderValue] = React.useState([]);

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
        {hasCarData ? <FilterComponent carInfo={carInfo} setMakeFilters={setMakeFilters} setYearFilters={setYearFilters} setColorFilters={setColorFilters} setYSliderValue={setYSliderValue} /> : null}
        {hasCarData ? getCarInfo(carInfo, searchQuery, makeFilters, yearFilters, colorFilters, yearSliderValue): null}
    </View>
  );
};

export default CarComponent;
