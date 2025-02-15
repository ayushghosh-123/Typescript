var NalleUser = /** @class */ (function () {
    function NalleUser(name) {
        this.name = name;
    }
    NalleUser.prototype.ChangeName = function () {
        this.name = "Hello";
    };
    return NalleUser;
}());
var myName = new NalleUser("Ayush");
myName.ChangeName();
