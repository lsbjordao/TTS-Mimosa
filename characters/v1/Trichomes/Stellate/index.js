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
exports.StellateLepidote = exports.StellateStalked = exports.StellateSubsessile = exports.Stellate = void 0;
// Import characters
var StellateSubsessile_1 = require("./StellateSubsessile");
Object.defineProperty(exports, "StellateSubsessile", { enumerable: true, get: function () { return StellateSubsessile_1.StellateSubsessile; } });
var StellateStalked_1 = require("./StellateStalked");
Object.defineProperty(exports, "StellateStalked", { enumerable: true, get: function () { return StellateStalked_1.StellateStalked; } });
var StellateLepidote_1 = require("./StellateLepidote");
Object.defineProperty(exports, "StellateLepidote", { enumerable: true, get: function () { return StellateLepidote_1.StellateLepidote; } });
// Import annotations classes
var Sources_1 = require("../../Sources");
var Stellate = /** @class */ (function (_super) {
    __extends(Stellate, _super);
    /**
     * Creates an instance of Stellate trichome.
     */
    function Stellate() {
        return _super.call(this) || this;
    }
    return Stellate;
}(Sources_1.Sources));
exports.Stellate = Stellate;
