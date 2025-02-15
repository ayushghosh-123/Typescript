class HalwaMaker{
    // private halua : String = "halua"
    public halua : String = "halua"
    constructor(public name: string){

    }
}

class GajarHalwaMaker extends HalwaMaker{
    constructor(name : string){
        super(name)
    }

    getValue(){
        console.log(this.name)
        console.log(this.halua)
    }
}

let kya_hua = new GajarHalwaMaker("Muli ka halwa banao")
kya_hua.getValue()