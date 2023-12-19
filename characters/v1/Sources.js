"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sources = void 0;
var Sources = /** @class */ (function () {
    function Sources() {
        this.sources = [];
    }
    Sources.prototype.addSource = function (data) {
        this.sources.push(data);
    };
    return Sources;
}());
exports.Sources = Sources;
