import React from 'react';
import { Button } from 'react-native';

export default function Inserter(props) {
    return (
        <Button title="Insert"
            color="#4a2"
            onPress={
                () => {
                    props.insertNumber(0)
                }
            }
        />
    );
}