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
exports.ApexLobes = exports.Lobes = void 0;
// Import characters
var ApexLobes_1 = require("./ApexLobes");
Object.defineProperty(exports, "ApexLobes", { enumerable: true, get: function () { return ApexLobes_1.ApexLobes; } });
// Import annotation classes
var Sources_1 = require("../../../Sources");
var Lobes = /** @class */ (function (_super) {
    __extends(Lobes, _super);
    /**
     * Creates an instance of lobes of corolla.
     */
    function Lobes() {
        return _super.call(this) || this;
    }
    return Lobes;
}(Sources_1.Sources));
exports.Lobes = Lobes;
