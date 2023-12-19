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
exports.Pollen = void 0;
// Import annotation classes
var Sources_1 = require("../Sources");
var Pollen = /** @class */ (function (_super) {
    __extends(Pollen, _super);
    /**
     * Creates an instance of abaxial surface of stipule.
     */
    function Pollen() {
        return _super.call(this) || this;
    }
    return Pollen;
}(Sources_1.Sources));
exports.Pollen = Pollen;
