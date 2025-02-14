// Intersection Type

type User = {
    name: string,
    email: string,
}

type Admin4 =  User &{
    getDetails(User: string): void
}

function kuchna_kaho(ayu: Admin4){
    ayu.getDetails
}
