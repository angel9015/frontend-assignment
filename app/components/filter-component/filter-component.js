import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import DropdownComponent from '../dropdown-component/dropdown-component';
import SliderComponent from '../slider-component/slider-component';
import Collapsible from 'react-native-collapsible';
import Svg, { Path } from "react-native-svg";
import styles from './styles';

const FilterComponent = (props) => {
    const {
        carInfo, setMakeFilters, setYearFilters, setColorFilters, setYSliderValue
    } = props;
    
    const [isCollapsed, setCollapsed] = useState(true);

    const makeList = [... new Set(carInfo && carInfo.map(item => item.car))]
    const yearList = [... new Set(carInfo && carInfo.map(item => item.car_model_year))]
    const colorList = [... new Set(carInfo && carInfo.map(item => item.car_color))]
        
    const makeItems = makeList.map(item => ({'label': item, 'value': item}))
    const yearItems = yearList.map(item => ({'label': item, 'value': item})).sort(function(a,b) {return a.value - b.value;})
    const colorItems = colorList.map(item => ({'label': item, 'value': item}))

    return (
        <View style={styles.container}>
            <View style={styles.filterItem}>
                <Text style={styles.title}>Filter By</Text>
                <TouchableHighlight 
                    underlayColor='#ffffff'
                    style={{flexDirection: 'column', justifyContent: 'center'}}
                    onPress={() => setCollapsed(!isCollapsed)}>
                    <View style={{width: 16, height: 16}}>
                        { isCollapsed ? (
                            <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="black" >
                                <Path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </Svg>
                        ) : (
                            <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="black">
                                <Path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </Svg>
                        )}
                    </View>
                </TouchableHighlight>
            </View>
            <Collapsible collapsed={isCollapsed}>
                <DropdownComponent items={makeItems} title='make' setValues={setMakeFilters}/>
                <DropdownComponent items={yearItems} title='year' setValues={setYearFilters}/>
                <DropdownComponent items={colorItems} title='color' setValues={setColorFilters}/>
                <SliderComponent items={yearList} setYSliderValue={setYSliderValue} />
            </Collapsible>
        </View>
    );
};

export default FilterComponent;
