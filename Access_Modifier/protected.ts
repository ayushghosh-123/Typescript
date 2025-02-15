class Machinemaker{
    // private name = "Harsh"
    protected name = "Harsh"
}

class PlasticMacker extends Machinemaker{
    public material = "plastic"
    ChangeName (){
        this.name = "some other name"
    }
}

let bottle3 = new PlasticMacker();
// bottle3.name