"use strict";
class AnishaRani {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
let Koushiki = new AnishaRani("Koushiki Ghosh ", 20);
Koushiki.Name;
