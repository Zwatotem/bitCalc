import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Operation from './Operation';

export default function OperationSelector(props) {
    [operations, setOperations] = React.useState([
        {
            name: 'AND',
            operation: (a, b) => a & b
        },
        {
            name: 'OR',
            operation: (a, b) => a | b
        },
        {
            name: 'XOR',
            operation: (a, b) => a ^ b
        },
        {
            name: 'ADD',
            operation: (a, b) => (a + b) % Math.pow(2, 16)
        },
        {
            name: 'SUB',
            operation: (a, b) => (a - b + Math.pow(2, 16)) % Math.pow(2, 16)
        },
        {
            name: 'MUL',
            operation: (a, b) => (a * b) % Math.pow(2, 16)
        },
    ]);
    return (
        <View style={styles.OperationSelector}>
            <View style={styles.Bar} />
            {
                operations.map(
                    (op, index) =>
                        <Operation
                            key={index}
                            index={props.index}
                            operationName={op.name}
                            operation={op.operation}
                            number1={props.number1}
                            number2={props.number2}
                            setResult={props.setResult}
                        />
                )
            }
            <View style={styles.Bar} />
        </View>
    )
}
const styles = StyleSheet.create({
    OperationSelector: {
        fontFamily: 'Consolas',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#333',
    },
    Bar: {
        flex: 1,
        height: 2,
        backgroundColor: '#777',
    }
});