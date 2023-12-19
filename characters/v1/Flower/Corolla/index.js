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
exports.Lobes = exports.Corolla = void 0;
var Lobes_1 = require("./Lobes");
Object.defineProperty(exports, "Lobes", { enumerable: true, get: function () { return Lobes_1.Lobes; } });
var Sources_1 = require("../../Sources");
// Import methods
var sizes_1 = require("../../methods/sizes");
var Corolla = /** @class */ (function (_super) {
    __extends(Corolla, _super);
    /**
     * Creates an instance of Corolla.
     */
    function Corolla() {
        return _super.call(this) || this;
    }
    /**
     * Sets the length values, considering the value of `present`.
     *
     * @param min - The minimum length value in milimeters (mm).
     * @param max - The maximum length value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    Corolla.prototype.setLengthMinMax = function (min, max) {
        (0, sizes_1._setLengthMinMax)(min, max, this);
    };
    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Corolla.prototype.setLength = function (value) {
        (0, sizes_1._setLength)(value, this);
    };
    return Corolla;
}(Sources_1.Sources));
exports.Corolla = Corolla;
