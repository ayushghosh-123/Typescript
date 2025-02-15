"use strict";
class Music {
    constructor(name, artist, thumbnail = "somethembnail.jpg", length, free) {
        this.free = free;
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "Somethumbnail.jpg";
        }
    }
}
let music1 = new Music("chaiya chaiya", "Ayush", "", 4, true);
