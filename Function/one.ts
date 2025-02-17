function AyushGhosh(): string{
    return "hey";
}

// function type

function Harsh(name: string, cb: (value: string)=> void){
    console.log(name)
    cb("hey")
}

Harsh("harsh", (value: string)=>{
    console.log(value)
})