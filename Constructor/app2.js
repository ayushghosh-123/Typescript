"use strict";
class HumanMaker {
    constructor(name, isHandsome, gender = "male") {
        this.name = name;
        this.isHandsome = isHandsome;
        this.gender = gender;
        this.age = 20;
    }
}
let ayush30 = new HumanMaker("Ayush", true);
