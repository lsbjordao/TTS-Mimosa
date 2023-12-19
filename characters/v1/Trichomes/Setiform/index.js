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
exports.SetiformGlochidiate = exports.SetiformBarbellate = exports.Setiform = void 0;
// Import characters
var SetiformBarbellate_1 = require("./SetiformBarbellate");
Object.defineProperty(exports, "SetiformBarbellate", { enumerable: true, get: function () { return SetiformBarbellate_1.SetiformBarbellate; } });
var SetiformGlochidiate_1 = require("./SetiformGlochidiate");
Object.defineProperty(exports, "SetiformGlochidiate", { enumerable: true, get: function () { return SetiformGlochidiate_1.SetiformGlochidiate; } });
// Import annotation classes
var Sources_1 = require("../../Sources");
var Setiform = /** @class */ (function (_super) {
    __extends(Setiform, _super);
    /**
     * Creates an instance of Setiform trichome.
     */
    function Setiform() {
        return _super.call(this) || this;
    }
    return Setiform;
}(Sources_1.Sources));
exports.Setiform = Setiform;
