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
exports.Bipinnate = exports.Petiole = exports.Leaf = void 0;
var Bipinnate_1 = require("./Bipinnate");
Object.defineProperty(exports, "Bipinnate", { enumerable: true, get: function () { return Bipinnate_1.Bipinnate; } });
var Petiole_1 = require("./Petiole");
Object.defineProperty(exports, "Petiole", { enumerable: true, get: function () { return Petiole_1.Petiole; } });
var Sources_1 = require("../Sources");
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    /**
     * Creates an instance of leaf.
     */
    function Leaf() {
        return _super.call(this) || this;
    }
    return Leaf;
}(Sources_1.Sources));
exports.Leaf = Leaf;
