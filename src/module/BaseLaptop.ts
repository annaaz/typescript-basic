import InterfaceLaptop from './InterfaceLaptop'
import * as Keyboard from './Keyboard'
class BaseLaptop<T> implements InterfaceLaptop<T> {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchbarButton: boolean;

    constructor(name: string, type: T, withNumeric: boolean,withTouchbarButton:boolean) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchbarButton = withTouchbarButton;

    }
    a(){
        return Keyboard.a()
    }
    b() {
        return Keyboard.b()
    }

}

export default BaseLaptop;