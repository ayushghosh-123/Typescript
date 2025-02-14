// interface Extend

interface Admin{
    name: string,
    email: string,
    password: string
}

interface User1 extends Admin{
    admin: Boolean
}

function naisakal(obj: User1){
    obj.password
}

interface carrot{
    name: String
}

interface carrot{
    name: String
}