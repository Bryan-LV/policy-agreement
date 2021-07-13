export default class PolicyAgreement {
    constructor({storageType, key}){
        this.storage = storageType;
        this.key = key
    }

    checkState(){
        let getKey = window[this.storage].getItem(this.key);
        return getKey ? getKey : false;
    }

    accept(value){
        window[this.storage].setItem(this.key, value);
        return window[this.storage].getItem(this.key);
    }
}