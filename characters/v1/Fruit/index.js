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
exports.Stipe = exports.Epicarp = exports.Replum = exports.Fruit = void 0;
// Import characters
var Replum_1 = require("./Replum");
Object.defineProperty(exports, "Replum", { enumerable: true, get: function () { return Replum_1.Replum; } });
var Epicarp_1 = require("./Epicarp");
Object.defineProperty(exports, "Epicarp", { enumerable: true, get: function () { return Epicarp_1.Epicarp; } });
var Stipe_1 = require("./Stipe");
Object.defineProperty(exports, "Stipe", { enumerable: true, get: function () { return Stipe_1.Stipe; } });
// Import methods
var sizes_1 = require("../methods/sizes");
// Import annotation classes
var Sources_1 = require("../Sources");
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    /**
     * Creates an instance of Fruit.
     */
    function Fruit() {
        return _super.call(this) || this;
    }
    /**
     * Sets the number of seeds values.
     *
     * @param min - The minimum height value in milimeters (mm).
     * @param max - The maximum height value in milimeters (mm).
     */
    Fruit.prototype.setNumberOfSeedsMinMax = function (min, max) {
        (0, sizes_1._setNumberOfSeedsMinMax)(min, max, this);
    };
    /**
     * Sets a single value for rarely minimum.
     *
     * @param rarelyMin - The rarely minimum value (integer).
     */
    Fruit.prototype.setNumberOfSeedsRarelyMin = function (min) {
        (0, sizes_1._setNumberOfSeedsRarelyMin)(min, this);
    };
    /**
     * Sets a single value for rarely maximum.
     *
     * @param rarelyMax - The rarely maximum value (integer).
     */
    Fruit.prototype.setNumberOfSeedsRarelyMax = function (max) {
        (0, sizes_1._setNumberOfSeedsRarelyMax)(max, this);
    };
    /**
     * Sets the height values, considering the value of `present`.
     *
     * @param min - The minimum height value in milimeters (mm).
     * @param max - The maximum height value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    Fruit.prototype.setHeightMinMax = function (min, max) {
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
    Fruit.prototype.setWidthMinMax = function (min, max) {
        (0, sizes_1._setWidthMinMax)(min, max, this);
    };
    return Fruit;
}(Sources_1.Sources));
exports.Fruit = Fruit;
