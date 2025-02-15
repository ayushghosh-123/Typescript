class NalleUser{
    constructor(public readonly name:string){

    }
    ChangeName(){
        // this.name = "Hello"
    }
}

let myName = new NalleUser("Ayush")
myName.ChangeName()