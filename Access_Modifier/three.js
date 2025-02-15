var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HalwaMaker = /** @class */ (function () {
    function HalwaMaker(name) {
        this.name = name;
    }
    return HalwaMaker;
}());
var GajarHalwaMaker = /** @class */ (function (_super) {
    __extends(GajarHalwaMaker, _super);
    function GajarHalwaMaker(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    GajarHalwaMaker.prototype.getValue = function () {
        console.log(this.name);
    };
    return GajarHalwaMaker;
}(HalwaMaker));
var kya_hua = new GajarHalwaMaker("Muli ka halwa banao");
kya_hua.getValue();
