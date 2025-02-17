"use strict";
function AyushGhosh() {
    return "hey";
}
// function type
function Harsh(name, cb) {
    console.log(name);
    cb("hey");
}
Harsh("harsh", (value) => {
    console.log(value);
});
