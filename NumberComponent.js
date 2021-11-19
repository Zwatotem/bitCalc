import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Bit from './Bit';

export default function NumberComponent(props) {
    extractBit = (bitNumber) => {
        return Math.floor(Value / Math.pow(2, bitNumber)) % 2;
    }
    function setNumber(value) {
        props.setNumber(value);
    }
    bits = [];
    for (let i = 15; i >= 0; i--) {
        bits.push(
            <Bit
                key={i}
                bit={i}
                setNumber={setNumber}
                number={props.number}
            />
        );
    }
    Value = props.number.Value;
    return (
        <View style={styles.BinNumber}>
            {bits}
            {
                props.showDecimal && (
                    <View style={styles.DecimalPreview} >
                        <Text>{Value.toString()}</Text>
                    </View>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    BinNumber: {
        fontFamily: 'Consolas',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#333',
    },
    DecimalPreview: {
        height: 35,
        width: 45,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
    }
});