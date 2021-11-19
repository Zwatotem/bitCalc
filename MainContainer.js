import React from 'react';
import { StyleSheet, View, Button, ScrollView, } from 'react-native';
import NumberComponent from './NumberComponent';
import OperationSelector from './OperationSelector';
import Inserter from './Inserter';
import Number from './Number';

export default function MainContainer() {
    const [showDecimal, setShowDecimal] = React.useState(false);
    const [numbers, setNumbers] = React.useState([]);
    function setResult(result, index) {
        console.debug(`setResult:`);
        let newNumbers = [...numbers.filter((number, i) => i !== index + 1)];
        newNumbers[index] = new Number(result);
        setNumbers(newNumbers);
    }
    function setNumber(number, index) {
        console.debug(`setNumber:`);
        let newNumbers = [...numbers];
        newNumbers[index] = new Number(number);
        setNumbers(newNumbers);
    }
    function insertNumber(newNumber, index) {
        console.debug(`insertNumber: ${newNumber}`);
        let newNumbers = [...numbers];
        newNumbers.splice(index, 0, new Number(newNumber));
        setNumbers(newNumbers);
        console.debug(`numbers after insertion ${numbers}`);
    }
    return (
        <ScrollView style={styles.MyContainer}>
            <Button title="Toggle decimal" onPress={() => setShowDecimal(!showDecimal)} />
            {
                numbers.map((item, index) => {
                    return (
                        <View key={index}>
                            <NumberComponent
                                key={index}
                                number={item}
                                showDecimal={showDecimal}
                                setNumber={setNumber}
                            />
                            {
                                index < numbers.length - 1 &&
                                <OperationSelector
                                    parent={this}
                                    number1={numbers[index]}
                                    number2={numbers[index + 1]}
                                    setResult={setResult}
                                    index={index}
                                />
                            }
                        </View>
                    );
                })
            }
            <Inserter
                parent={this}
                insertNumber={insertNumber}
            />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    MyContainer: {
        flex: 1,
        backgroundColor: '#333',
    },
});