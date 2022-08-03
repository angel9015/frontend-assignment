import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import styles from './styles';

const DEFAULT_VALUE = 0.2;

const SliderContainer = (props) => {
    const {caption, sliderValue, trackMarks, setYSliderValue} = props;
    const [value, setValue] = React.useState(
        sliderValue ? sliderValue : DEFAULT_VALUE,
    );
    let renderTrackMarkComponent;

    useEffect(() => {
        setYSliderValue(value)
    },[value])

    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
        renderTrackMarkComponent = (index) => {
            const currentMarkValue = trackMarks[index];
            const currentSliderValue =
                value || (Array.isArray(value) && value[0]) || 0;
            const style =
                currentMarkValue > Math.max(currentSliderValue)
                    ? trackMarkStyles.activeMark
                    : trackMarkStyles.inactiveMark;
            return <View style={style} />;
        };
    }

    const renderChildren = () => {
        return React.Children.map(
            props.children,
            (child) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: setValue,
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                    });
                }

                return child;
            },
        );
    };

    return (
        <View style={styles.sliderContainer}>
            <View style={styles.titleContainer}>
                <Text>{`${caption} (${Array.isArray(value) ? value.join(' - ') : value})`}</Text>
            </View>
            {renderChildren()}
        </View>
    );
};

const SliderComponent = (props) => {
    const {
        items,
        setYSliderValue
    } = props;

    const min = Math.min(...items);
    const max = Math.max(...items);

    return (
        <View style={styles.container}>
            <SliderContainer
                caption="Select a year range"
                sliderValue={[min, max]}
                setYSliderValue={setYSliderValue}
                >
                <Slider
                    animateTransitions
                    maximumTrackTintColor="#d3d3d3"
                    maximumValue={max}
                    minimumTrackTintColor="#1fb28a"
                    minimumValue={min}
                    step={1}
                    thumbTintColor="#1a9274"
                />
            </SliderContainer>
        </View>
    );
};

export default SliderComponent;
