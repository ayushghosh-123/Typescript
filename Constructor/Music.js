var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        if (thumbnail === void 0) { thumbnail = "somethembnail.jpg"; }
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
    return Music;
}());
var music1 = new Music("chaiya chaiya", "Ayush", "", 4, true);
