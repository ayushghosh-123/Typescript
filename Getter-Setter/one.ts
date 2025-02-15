
class AnishaRani{
    constructor (public _name:string , public age : number){}
    get Name(){
        return this._name;
    }
    set Name(value: string){
        this._name = value;
    }
}

let Koushiki = new AnishaRani("Koushiki Ghosh ", 20)
Koushiki.Name