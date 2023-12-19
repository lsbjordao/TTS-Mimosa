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
exports.Capitate = exports.Granular = exports.Peltate = exports.Lepidote = exports.Verruciform = exports.Porrect = exports.Dendritic = exports.Fasciculate = exports.Stellate = exports.Setiform = exports.Filiform = exports.Trichomes = void 0;
var Filiform_1 = require("./Filiform");
Object.defineProperty(exports, "Filiform", { enumerable: true, get: function () { return Filiform_1.Filiform; } });
var Setiform_1 = require("./Setiform");
Object.defineProperty(exports, "Setiform", { enumerable: true, get: function () { return Setiform_1.Setiform; } });
var Stellate_1 = require("./Stellate");
Object.defineProperty(exports, "Stellate", { enumerable: true, get: function () { return Stellate_1.Stellate; } });
var Fasciculate_1 = require("./Fasciculate");
Object.defineProperty(exports, "Fasciculate", { enumerable: true, get: function () { return Fasciculate_1.Fasciculate; } });
var Dendritic_1 = require("./Dendritic");
Object.defineProperty(exports, "Dendritic", { enumerable: true, get: function () { return Dendritic_1.Dendritic; } });
var Porrect_1 = require("./Porrect");
Object.defineProperty(exports, "Porrect", { enumerable: true, get: function () { return Porrect_1.Porrect; } });
var Verruciform_1 = require("./Verruciform");
Object.defineProperty(exports, "Verruciform", { enumerable: true, get: function () { return Verruciform_1.Verruciform; } });
var Lepidote_1 = require("./Lepidote");
Object.defineProperty(exports, "Lepidote", { enumerable: true, get: function () { return Lepidote_1.Lepidote; } });
var Peltate_1 = require("./Peltate");
Object.defineProperty(exports, "Peltate", { enumerable: true, get: function () { return Peltate_1.Peltate; } });
var Granular_1 = require("./Granular");
Object.defineProperty(exports, "Granular", { enumerable: true, get: function () { return Granular_1.Granular; } });
var Capitate_1 = require("./Capitate");
Object.defineProperty(exports, "Capitate", { enumerable: true, get: function () { return Capitate_1.Capitate; } });
var Sources_1 = require("../Sources");
var Trichomes = /** @class */ (function (_super) {
    __extends(Trichomes, _super);
    /**
     * Creates an instance of trichomes.
     */
    function Trichomes() {
        return _super.call(this) || this;
    }
    return Trichomes;
}(Sources_1.Sources));
exports.Trichomes = Trichomes;
