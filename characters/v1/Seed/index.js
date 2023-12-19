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
exports.Seed = void 0;
// Import methods
var sizes_1 = require("../methods/sizes");
// Import annotation classes
var Sources_1 = require("../Sources");
var Seed = /** @class */ (function (_super) {
    __extends(Seed, _super);
    /**
     * Creates an instance of seed.
     */
    function Seed() {
        return _super.call(this) || this;
    }
    /**
     * Sets the height values, considering the value of `present`.
     *
     * @param min - The minimum height value in milimeters (mm).
     * @param max - The maximum height value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    Seed.prototype.setHeightMinMax = function (min, max) {
        (0, sizes_1._setHeightMinMax)(min, max, this);
    };
    /**
     * Sets the width values, considering the value of `present`.
     *
     * @param min - The minimum width value in milimeters (mm).
     * @param max - The maximum width value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    Seed.prototype.setWidthMinMax = function (min, max) {
        (0, sizes_1._setWidthMinMax)(min, max, this);
    };
    /**
     * Sets a single value for height.
     *
     * @param value - The height value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Seed.prototype.setHeight = function (value) {
        (0, sizes_1._setHeight)(value, this);
    };
    /**
     * Sets a single value for width.
     *
     * @param value - The width value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Seed.prototype.setWidth = function (value) {
        (0, sizes_1._setWidth)(value, this);
    };
    return Seed;
}(Sources_1.Sources));
exports.Seed = Seed;
