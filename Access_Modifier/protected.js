"use strict";
class Machinemaker {
    constructor() {
        // private name = "Harsh"
        this.name = "Harsh";
    }
}
class PlasticMacker extends Machinemaker {
    constructor() {
        super(...arguments);
        this.material = "plastic";
    }
    ChangeName() {
        this.name = "some other name";
    }
}
let bottle3 = new PlasticMacker();
// bottle3.name
