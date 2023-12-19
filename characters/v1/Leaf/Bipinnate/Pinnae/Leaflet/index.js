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
exports.MarginLeaflet = exports.AdaxialLeaflet = exports.AbaxialLeaflet = exports.Leaflet = void 0;
var AbaxialLeaflet_1 = require("./AbaxialLeaflet");
Object.defineProperty(exports, "AbaxialLeaflet", { enumerable: true, get: function () { return AbaxialLeaflet_1.AbaxialLeaflet; } });
var AdaxialLeaflet_1 = require("./AdaxialLeaflet");
Object.defineProperty(exports, "AdaxialLeaflet", { enumerable: true, get: function () { return AdaxialLeaflet_1.AdaxialLeaflet; } });
var MarginLeaflet_1 = require("./MarginLeaflet");
Object.defineProperty(exports, "MarginLeaflet", { enumerable: true, get: function () { return MarginLeaflet_1.MarginLeaflet; } });
// Import methods
var sizes_1 = require("../../../../methods/sizes");
// Import annotation classes
var Sources_1 = require("../../../../Sources");
var Leaflet = /** @class */ (function (_super) {
    __extends(Leaflet, _super);
    /**
     * Creates an instance of Leaflet.
     */
    function Leaflet() {
        return _super.call(this) || this;
    }
    /**
     * Sets the height values, considering the value of `present`.
     *
     * @param min - The minimum height value in milimeters (mm).
     * @param max - The maximum height value in milimeters (mm).
     */
    Leaflet.prototype.setHeightMinMax = function (min, max) {
        (0, sizes_1._setHeightMinMax)(min, max, this);
    };
    /**
     * Sets the width values, considering the value of `present`.
     *
     * @param min - The minimum width value in milimeters (mm).
     * @param max - The maximum width value in milimeters (mm).
     */
    Leaflet.prototype.setWidthMinMax = function (min, max) {
        (0, sizes_1._setWidthMinMax)(min, max, this);
    };
    /**
     * Sets a single value for height.
     *
     * @param value - The height value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Leaflet.prototype.setHeight = function (value) {
        (0, sizes_1._setHeight)(value, this);
    };
    /**
     * Sets a single value for width.
     *
     * @param value - The width value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Leaflet.prototype.setWidth = function (value) {
        (0, sizes_1._setWidth)(value, this);
    };
    /**
     * Sets a single value for number of pairs.
     *
     * @param value - The number of pairs value (integer).
     */
    Leaflet.prototype.setNumberOfPairs = function (value) {
        (0, sizes_1._setNumberOfPairs)(value, this);
    };
    /**
     * Sets the number of pairs values.
     *
     * @param min - The minimum number of pairs value (integer).
     * @param max - The maximum number of pairs value (integer).
     */
    Leaflet.prototype.setNumberOfPairsMinMax = function (min, max) {
        (0, sizes_1._setNumberOfPairsMinMax)(min, max, this);
    };
    /**
     * Sets a single rarely value for number of pairs.
     *
     * @param min - The rarely minimum number of pairs value (integer).
     */
    Leaflet.prototype.setNumberOfPairsRarelyMin = function (min) {
        (0, sizes_1._setNumberOfPairsRarelyMin)(min, this);
    };
    /**
     * Sets a single rarely value for number of pairs.
     *
     * @param min - The rarely maximum number of pairs value (integer).
     */
    Leaflet.prototype.setNumberOfPairsRarelyMax = function (max) {
        (0, sizes_1._setNumberOfPairsRarelyMax)(max, this);
    };
    return Leaflet;
}(Sources_1.Sources));
exports.Leaflet = Leaflet;
