// Generic Bottlemaker 
class Bottlemaker<T>{
    constructor(public name: T){

    }
}

let Bat = new Bottlemaker<string>("hey")
let Boll = new Bottlemaker<number>(12)