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
exports.baseFilaments = exports.Filaments = void 0;
// Import characters
var baseFilaments_1 = require("./baseFilaments");
Object.defineProperty(exports, "baseFilaments", { enumerable: true, get: function () { return baseFilaments_1.baseFilaments; } });
// Import methods
var sizes_1 = require("../../methods/sizes");
// Import annotation classes
var Sources_1 = require("../../Sources");
var Filaments = /** @class */ (function (_super) {
    __extends(Filaments, _super);
    /**
     * Creates an instance of Filaments.
     */
    function Filaments() {
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
    Filaments.prototype.setLengthMinMax = function (min, max) {
        (0, sizes_1._setLengthMinMax)(min, max, this);
    };
    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Filaments.prototype.setLength = function (value) {
        (0, sizes_1._setLength)(value, this);
    };
    return Filaments;
}(Sources_1.Sources));
exports.Filaments = Filaments;
