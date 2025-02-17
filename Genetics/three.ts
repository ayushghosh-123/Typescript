// generic interfaces

interface Halua<T>{
    name: string ;
    age: number;
    key: T
}

function gohan(obj: Halua<string>){
    // obj.key.repeat
}

gohan({name: "foo", age: 25, key: "ajab gajab"})