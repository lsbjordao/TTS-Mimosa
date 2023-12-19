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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginStipule = exports.AdaxialStipule = exports.AbaxialStipule = exports.Stipule = void 0;
var AbaxialStipule_1 = require("./AbaxialStipule");
Object.defineProperty(exports, "AbaxialStipule", { enumerable: true, get: function () { return AbaxialStipule_1.AbaxialStipule; } });
var AdaxialStipule_1 = require("./AdaxialStipule");
Object.defineProperty(exports, "AdaxialStipule", { enumerable: true, get: function () { return AdaxialStipule_1.AdaxialStipule; } });
var MarginStipule_1 = require("./MarginStipule");
Object.defineProperty(exports, "MarginStipule", { enumerable: true, get: function () { return MarginStipule_1.MarginStipule; } });
// Import methods
var sizes_1 = require("../methods/sizes");
// Import annotation classes
var Sources_1 = require("../Sources");
var Stipule = /** @class */ (function (_super) {
    __extends(Stipule, _super);
    /**
     * Creates an instance of Stipule.
     */
    function Stipule() {
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
    Stipule.prototype.setLengthMinMax = function (min, max) {
        if (this.present === false && (min !== null || max !== null)) {
            throw new Error("Cannot set length when present is false");
        }
        if (min >= max) {
            throw new Error("Minimum length must be less than maximum length");
        }
        this.length = __assign(__assign({}, this.length), { min: min, max: max });
    };
    /**
     * Sets a single value for rarely minimum.
     *
     * @param rarelyMin - The rarely minimum value (integer).
     */
    Stipule.prototype.setLengthRarelyMin = function (min) {
        (0, sizes_1._setLengthRarelyMin)(min, this);
    };
    /**
     * Sets a single value for rarely maximum.
     *
     * @param rarelyMax - The rarely maximum value (integer).
     */
    Stipule.prototype.setLengthRarelyMax = function (max) {
        (0, sizes_1._setLengthRarelyMax)(max, this);
    };
    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Stipule.prototype.setLength = function (value) {
        if (this.present === false && value !== null) {
            throw new Error("Cannot set length when present is false");
        }
        this.length = __assign(__assign({}, this.length), { value: value });
    };
    /**
     * Sets the height values, considering the value of `present`.
     *
     * @param min - The minimum height value in milimeters (mm).
     * @param max - The maximum height value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    Stipule.prototype.setHeightMinMax = function (min, max) {
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
    Stipule.prototype.setWidthMinMax = function (min, max) {
        (0, sizes_1._setWidthMinMax)(min, max, this);
    };
    /**
     * Sets a single value for height.
     *
     * @param value - The height value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Stipule.prototype.setHeight = function (value) {
        (0, sizes_1._setHeight)(value, this);
    };
    /**
     * Sets a single value for width.
     *
     * @param value - The width value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Stipule.prototype.setWidth = function (value) {
        (0, sizes_1._setWidth)(value, this);
    };
    return Stipule;
}(Sources_1.Sources));
exports.Stipule = Stipule;
