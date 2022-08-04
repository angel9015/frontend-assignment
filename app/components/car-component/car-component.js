import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList, Button, TouchableHighlight } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Modal from "react-native-modal";
import Collapsible from 'react-native-collapsible';
import FilterComponent from '../filter-component/filter-component';
import Svg, { Path } from "react-native-svg";
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
    const [searchQuery, setSearchQuery] = React.useState('');
    const [makeFilters, setMakeFilters] = React.useState([]);
    const [yearFilters, setYearFilters] = React.useState([]);
    const [colorFilters, setColorFilters] = React.useState([]);
    const [yearSliderValue, setYSliderValue] = React.useState([]);
    const [carArray, setCarArray] = React.useState([]);
    const [isCollapsed, setCollapsed] = useState(true);

    const onChangeSearch = query => setSearchQuery(query);

    const hasCarData = Object.keys(carInfo).length;

    useEffect(() => {
        fetchData();
    }, [])
   
    useEffect(() => {
        if(!hasCarData) {
            return;
        }

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
        setCarArray(carArray);
        
    }, [hasCarData, searchQuery, makeFilters, yearFilters, colorFilters, yearSliderValue])

    const [selectedItem, setSelectedItem] = useState(null);

    const toggleModal = (item) => {
        setSelectedItem(item);
    };

    return (
        <View style={styles.container}>
            {error ? getErrorMessage() : null}

            { selectedItem ? (
                <Modal 
                    isVisible={selectedItem ? true: false}
                    onBackdropPress={() => toggleModal(null)}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                >
                    <View style={styles.modalView}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={{width: 120, height: 120, borderRadius: 20}}
                                source={{
                                    uri: `https://picsum.photos/200/300?random=${selectedItem.id}`, 
                                }}
                            />
                            <View style={{marginLeft: 20}}>
                                <Text style={styles.carDetailTxt}>Make: {selectedItem.car}</Text>
                                <Text style={styles.carDetailTxt}>Model: {selectedItem.car_model}</Text>
                                <Text style={styles.carDetailTxt}>Year: {selectedItem.car_model_year}</Text>
                                <Text style={styles.carDetailTxt}>Color: {selectedItem.car_color}</Text>
                            </View>
                        </View>
                        <Text style={{marginTop: 5}}>Note: Booking feature is upcoming.</Text>
                        <View style={styles.btnGroup}>
                            
                            <View style={{marginRight: 10}}>
                                <Button title="Cancel" onPress={() => toggleModal(null)} />
                            </View>
                            
                            <Button title="Book" onPress={() => toggleModal(null)} />
                        </View>
                    </View>
                </Modal>
            ) : null}
            
            <View style={styles.loading}>
                {isLoading ? <ActivityIndicator /> : null}
            </View>
            {hasCarData ? (
                <View style={{marginTop: 30}}>
                    <Text style={styles.title1}>Choose from {hasCarData}</Text>
                    <Text style={styles.title2}>makes and models</Text>
                </View>
            ) : null}
            {hasCarData ? (
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Search</Text>
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
            ) : null}
            <Collapsible collapsed={isCollapsed}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchBar}
                />
            </Collapsible>
            {hasCarData ? <FilterComponent carInfo={carInfo} setMakeFilters={setMakeFilters} setYearFilters={setYearFilters} setColorFilters={setColorFilters} setYSliderValue={setYSliderValue} /> : null}
            {hasCarData ? (
                <FlatList
                    data={carArray}
                    style={styles.carList}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => (
                        <TouchableHighlight style={styles.carItem} key={item.id} underlayColor='#ffffff' onPress={() => toggleModal(item)}>
                            <View>
                                <Image
                                    style={styles.carImage}
                                    source={{
                                        uri: `https://picsum.photos/200/300?random=${item.id}`, 
                                    }}
                                />
                                <View style={styles.carDetails}>
                                    <Text style={styles.carDetailTxt}>{item.car}</Text>
                                    <Text style={styles.carDetailTxt}>{item.price}</Text>
                                    <View style={styles.status}>
                                        {item.availability === true ? (
                                            <View style={styles.availableStatus}></View>
                                        ) : (
                                            <View style={styles.notAvailableStatus}></View>
                                        )}
                                        <Text>{`${item.availability === true ? 'Available' : 'Not Available'}`}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            ) : null}
        </View>
    );
};

export default CarComponent;
