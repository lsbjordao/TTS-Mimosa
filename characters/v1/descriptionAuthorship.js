"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionAuthorship = void 0;
var DescriptionAuthorship = /** @class */ (function () {
    function DescriptionAuthorship() {
        this.authorship = [];
    }
    DescriptionAuthorship.prototype.addAuthor = function (data) {
        this.authorship.push(data);
    };
    return DescriptionAuthorship;
}());
exports.DescriptionAuthorship = DescriptionAuthorship;
