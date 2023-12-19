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
exports.Rachis = void 0;
// Import methods
var sizes_1 = require("../../../methods/sizes");
// Import annotation classes
var Sources_1 = require("../../../Sources");
var Rachis = /** @class */ (function (_super) {
    __extends(Rachis, _super);
    /**
     * Creates an instance of Rachis.
     */
    function Rachis() {
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
    Rachis.prototype.setLengthMinMax = function (min, max) {
        (0, sizes_1._setLengthMinMax)(min, max, this);
    };
    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Rachis.prototype.setLength = function (value) {
        (0, sizes_1._setLength)(value, this);
    };
    /**
     * Sets a single value for rarely minimum.
     *
     * @param rarelyMin - The rarely minimum value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Rachis.prototype.setLengthRarelyMin = function (rarelyMin) {
        (0, sizes_1._setLengthRarelyMin)(rarelyMin, this);
    };
    /**
     * Sets a single value for rarely maximum.
     *
     * @param rarelyMax - The rarely maximum value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Rachis.prototype.setLengthRarelyMax = function (rarelyMax) {
        (0, sizes_1._setLengthRarelyMax)(rarelyMax, this);
    };
    return Rachis;
}(Sources_1.Sources));
exports.Rachis = Rachis;
