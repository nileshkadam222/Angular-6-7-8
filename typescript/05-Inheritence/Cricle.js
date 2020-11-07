"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricle = void 0;
var Shape_1 = require("./Shape");
var Cricle = /** @class */ (function (_super) {
    __extends(Cricle, _super);
    function Cricle(_theX, _theY, _radius) {
        var _this = _super.call(this, _theX, _theY) || this;
        _this._radius = _radius;
        return _this;
    }
    Object.defineProperty(Cricle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Cricle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + " Radius= " + this._radius;
    };
    return Cricle;
}(Shape_1.Shape));
exports.Cricle = Cricle;
