export default class Number {
    constructor(value) {
        this.Value = value;
    }
    extractBit = (bitNumber) => {
        return Math.floor(this.Value / Math.pow(2, bitNumber)) % 2;
    }
    Value;
}