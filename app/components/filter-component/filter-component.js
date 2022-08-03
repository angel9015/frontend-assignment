import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import DropdownComponent from '../dropdown-component/dropdown-component';
import styles from './styles';

const FilterComponent = (props) => {
    const {
        carInfo, setMakeFilters, setYearFilters, setColorFilters
    } = props;
    
    const makeList = [... new Set(carInfo && carInfo.map(item => item.car))]
    const yearList = [... new Set(carInfo && carInfo.map(item => item.car_model_year))]
    const colorList = [... new Set(carInfo && carInfo.map(item => item.car_color))]
        
    const makeItems = makeList.map(item => ({'label': item, 'value': item}))
    const yearItems = yearList.map(item => ({'label': item, 'value': item})).sort(function(a,b) {return a.value - b.value;})
    const colorItems = colorList.map(item => ({'label': item, 'value': item}))

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filter By</Text>
            <DropdownComponent items={makeItems} title='make' setValues={setMakeFilters}/>
            <DropdownComponent items={yearItems} title='year' setValues={setYearFilters}/>
            <DropdownComponent items={colorItems} title='color' setValues={setColorFilters}/>
        </View>
    );
};

export default FilterComponent;
