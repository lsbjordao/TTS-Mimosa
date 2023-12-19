"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calyx = exports.Corolla = exports.Bracteole = exports.Flower = void 0;
var Bracteole_1 = require("./Bracteole");
Object.defineProperty(exports, "Bracteole", { enumerable: true, get: function () { return Bracteole_1.Bracteole; } });
var Corolla_1 = require("./Corolla");
Object.defineProperty(exports, "Corolla", { enumerable: true, get: function () { return Corolla_1.Corolla; } });
var Calyx_1 = require("./Calyx");
Object.defineProperty(exports, "Calyx", { enumerable: true, get: function () { return Calyx_1.Calyx; } });
var Sources_1 = require("../Sources");
var Flower = /** @class */ (function (_super) {
    __extends(Flower, _super);
    /**
     * Creates an instance of Flower.
     */
    function Flower() {
        return _super.call(this) || this;
    }
    return Flower;
}(Sources_1.Sources));
exports.Flower = Flower;
