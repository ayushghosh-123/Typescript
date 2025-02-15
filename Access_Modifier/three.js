"use strict";
class HalwaMaker {
    constructor(name) {
        this.name = name;
        // private halua : String = "halua"
        this.halua = "halua";
    }
}
class GajarHalwaMaker extends HalwaMaker {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
        console.log(this.halua);
    }
}
let kya_hua = new GajarHalwaMaker("Muli ka halwa banao");
kya_hua.getValue();
