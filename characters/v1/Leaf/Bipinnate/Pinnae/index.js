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
exports.Gall = exports.Paraphillidia = exports.Leaflet = exports.Rachilla = exports.Pinnae = void 0;
var Rachilla_1 = require("../Pinnae/Rachilla");
Object.defineProperty(exports, "Rachilla", { enumerable: true, get: function () { return Rachilla_1.Rachilla; } });
var Paraphillidia_1 = require("./Paraphillidia");
Object.defineProperty(exports, "Paraphillidia", { enumerable: true, get: function () { return Paraphillidia_1.Paraphillidia; } });
var Leaflet_1 = require("./Leaflet");
Object.defineProperty(exports, "Leaflet", { enumerable: true, get: function () { return Leaflet_1.Leaflet; } });
var Gall_1 = require("../../../Gall");
Object.defineProperty(exports, "Gall", { enumerable: true, get: function () { return Gall_1.Gall; } });
// Import methods
var sizes_1 = require("../../../methods/sizes");
// Import annotation classes
var Sources_1 = require("../../../Sources");
var Pinnae = /** @class */ (function (_super) {
    __extends(Pinnae, _super);
    /**
     * Creates an instance of leaf.
     */
    function Pinnae() {
        return _super.call(this) || this;
    }
    /**
     * Sets a single value for number of pairs.
     *
     * @param value - The number of pairs value (integer).
     */
    Pinnae.prototype.setNumberOfPairs = function (value) {
        (0, sizes_1._setNumberOfPairs)(value, this);
    };
    /**
     * Sets the number of pairs miminum and maximum values.
     *
     * @param min - The minimum number of pairs value (integer).
     * @param max - The maximum number of pairs value (integer).
     */
    Pinnae.prototype.setNumberOfPairsMinMax = function (min, max) {
        (0, sizes_1._setNumberOfPairsMinMax)(min, max, this);
    };
    /**
     * Sets a single rarely value for number of pairs.
     *
     * @param min - The rarely minimum number of pairs value (integer).
     */
    Pinnae.prototype.setNumberOfPairsRarelyMin = function (min) {
        (0, sizes_1._setNumberOfPairsRarelyMin)(min, this);
    };
    /**
     * Sets a single rarely value for number of pairs.
     *
     * @param min - The rarely maximum number of pairs value (integer).
     */
    Pinnae.prototype.setNumberOfPairsRarelyMax = function (max) {
        (0, sizes_1._setNumberOfPairsRarelyMax)(max, this);
    };
    return Pinnae;
}(Sources_1.Sources));
exports.Pinnae = Pinnae;
