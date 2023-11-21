import BaseLaptop from "./BaseLaptop";
class Macbook<T> extends BaseLaptop<T> {
    constructor(type: T, numeric:boolean,touchBar:boolean){
        super("Macbook", type, numeric, touchBar);
    }
}

export default Macbook;