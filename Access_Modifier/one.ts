class BottleMaker3{
    constructor(public type: String){
        this.type = type;
    }

    Changing(){
        this.type = "Ayush"
    }
}

let bottle = new BottleMaker3("Milton")
bottle.type = "Hului"
bottle.Changing()