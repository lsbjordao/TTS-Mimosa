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
exports.Spicate = exports.CapitateInflorescence = exports.Peduncle = exports.Inflorescence = void 0;
var CapitateInflorescence_1 = require("./CapitateInflorescence");
Object.defineProperty(exports, "CapitateInflorescence", { enumerable: true, get: function () { return CapitateInflorescence_1.CapitateInflorescence; } });
var Spicate_1 = require("./Spicate");
Object.defineProperty(exports, "Spicate", { enumerable: true, get: function () { return Spicate_1.Spicate; } });
var Sources_1 = require("../Sources");
var Peduncle_1 = require("./Peduncle");
Object.defineProperty(exports, "Peduncle", { enumerable: true, get: function () { return Peduncle_1.Peduncle; } });
var Inflorescence = /** @class */ (function (_super) {
    __extends(Inflorescence, _super);
    /**
     * Creates an instance of Inflorescence.
     */
    function Inflorescence() {
        return _super.call(this) || this;
    }
    return Inflorescence;
}(Sources_1.Sources));
exports.Inflorescence = Inflorescence;
