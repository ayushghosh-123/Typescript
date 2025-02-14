class Music{
    public name;
    public artist;
    public thumbnail;
    public length;
    constructor(name:string,  artist:string,  thumbnail:string = "somethembnail.jpg", length: number,public free: boolean){
        this.name = name ;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free
        if(!thumbnail){
            this.thumbnail = "Somethumbnail.jpg"
        }
    }
}

let music1 = new Music("chaiya chaiya", "Ayush","", 4, true)