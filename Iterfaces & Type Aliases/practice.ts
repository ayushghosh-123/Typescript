// Interface and Type Aliases

function hamaraPyar(alu: number, tomato: string){
    alu.toLocaleString
    tomato.charCodeAt
}

// interface hai kisi bhi object ka sakal bola jata hai
interface user{
    name: string,
    email: string,
    password: string,
    gender?: string //ban gya optional lo karlo bat
}
function getDataOfUser(obj: user){
    obj.name,
    obj.password,
    obj.gender
}

getDataOfUser({name: "ayush", email: "ghoshayush3084@gmail.com", password: "Ayu@30987", gender: "Male"})