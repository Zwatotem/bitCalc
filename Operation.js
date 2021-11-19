import React from "react";
import { View, Button } from "react-native";

export default class Operation extends React.Component {
    operation = this.props.operation;

    render() {
        return (
            <View style={{ marginHorizontal: 4 }}>
                <Button
                    onPress={
                        () => {
                            let result = this.operation(this.props.number1.Value, this.props.number2.Value);
                            console.log(result);
                            this.props.setResult(result, this.props.index);
                        }
                    }
                    title={this.props.operationName}
                    color="darkgray"
                />
            </View>
        );
    }
}