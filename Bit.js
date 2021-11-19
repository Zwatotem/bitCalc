import React from "react";
import { Button } from "react-native";

export default class Bit extends React.Component {
    getValue = () => {
        return this.props.number.extractBit(this.props.bit);
    }

    setBit = (bitNumber, value) => {

        let res = this.props.number.Value ^ (1 << bitNumber);
        console.debug(res);
        return res;
    }
    setValue = (value) => {
        this.props.number.Value = this.setBit(this.props.bit, value);
    }
    render() {
        return (
            <Button
                onPress={
                    () => {
                        this.setValue(!this.getValue());
                        let number = this.props.number.Value;
                        number = number ^ (1 << this.props.bit);
                        this.props.setNumber(number);
                    }
                }
                title={this.getValue().toString()}
                color={this.getValue() === 0 ? "gray" : "darkgray"}
            />
        );
    }
}