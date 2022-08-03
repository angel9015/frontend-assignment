import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

const DropdownComponent = (props) => {
    const {
        items,
        setValues,
        title
    } = props;
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);

    useEffect(() => {
        setValues(value);
    },[value])

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                dropDownDirection="TOP"
                placeholder={`Select ${title} items`}

                dropDownContainerStyle={{zIndex: 1000, elevation: 1000}}
                theme="DARK"
                multiple={true}
                mode="BADGE"
            />
        </View>
    );
};

export default DropdownComponent;
