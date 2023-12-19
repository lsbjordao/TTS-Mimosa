"use strict";
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
exports._setNumberOfSeedsRarelyMax = exports._setNumberOfSeedsRarelyMin = exports._setNumberOfSeedsMinMax = exports._setNumberOfPairsRarelyMax = exports._setNumberOfPairsMinMax = exports._setNumberOfPairsRarelyMin = exports._setNumberOfPairs = exports._setWidthMinMax = exports._setWidth = exports._setHeightMinMax = exports._setHeight = exports._setLengthRarelyMax = exports._setLengthRarelyMin = exports._setLengthMinMax = exports._setLength = void 0;
/**
 * Sets a single value for length.
 *
 * @param value - The length value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setLength(value, that) {
    if ((that.are === 'absent' || that.is === 'absent') && value !== null) {
        throw new Error("Cannot set length when structure is absent");
    }
    that.length = __assign(__assign({}, that.length), { value: value });
}
exports._setLength = _setLength;
/**
 * Sets a single value for height.
 *
 * @param value - The height value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setHeight(value, that) {
    if ((that.are === 'absent' || that.is === 'absent') && value !== null) {
        throw new Error("Cannot set height when structure is absent");
    }
    that.length = __assign(__assign({}, that.length), { value: value });
}
exports._setHeight = _setHeight;
/**
 * Sets a single value for width.
 *
 * @param value - The width value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setWidth(value, that) {
    if ((that.are === 'absent' || that.is === 'absent') && value !== null) {
        throw new Error("Cannot set width when structure is absent");
    }
    that.length = __assign(__assign({}, that.length), { value: value });
}
exports._setWidth = _setWidth;
/**
 * Sets a single value for number of pairs.
 *
 * @param value - The number of pairs value (integer)
 */
function _setNumberOfPairs(value, that) {
    that.numberOfPairs = __assign(__assign({}, that.numberOfPairs), { value: value });
}
exports._setNumberOfPairs = _setNumberOfPairs;
/**
 * Sets a single value for rarely minimum.
 *
 * @param rarelyMin - The rarely minimum value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setLengthRarelyMin(rarelyMin, that) {
    if ((that.are === 'absent' || that.is === 'absent') && rarelyMin !== null) {
        throw new Error("Cannot set rarely minimum when structure is absent");
    }
    that.length = __assign(__assign({}, that.length), { rarelyMin: rarelyMin });
}
exports._setLengthRarelyMin = _setLengthRarelyMin;
/**
 * Sets a single value for rarely maximum.
 *
 * @param rarelyMax - The rarely maximum value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setLengthRarelyMax(rarelyMax, that) {
    if ((that.are === 'absent' || that.is === 'absent') && rarelyMax !== null) {
        throw new Error("Cannot set rarely minimum when structure is absent");
    }
    that.length = __assign(__assign({}, that.length), { rarelyMax: rarelyMax });
}
exports._setLengthRarelyMax = _setLengthRarelyMax;
/**
 * Sets the length values, considering the value of `present`.
 *
 * @param min - The minimum length value in milimeters (mm).
 * @param max - The maximum length value in milimeters (mm).
 * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
 * @throws Error if `min` is greater than or equal to `max`.
 */
function _setLengthMinMax(min, max, that) {
    if ((that.are === 'absent' || that.is === 'absent') && (min !== null || max !== null)) {
        throw new Error("Cannot set length when structure is absent");
    }
    if (min >= max) {
        throw new Error("Minimum length must be less than maximum length");
    }
    that.length = __assign(__assign({}, that.length), { min: min, max: max });
}
exports._setLengthMinMax = _setLengthMinMax;
function _setHeightMinMax(min, max, that) {
    if ((that.are === 'absent' || that.is === 'absent') && (min !== null || max !== null)) {
        throw new Error("Cannot set height when structure is absent");
    }
    if (min >= max) {
        throw new Error("Minimum height must be less than maximum height");
    }
    that.length = __assign(__assign({}, that.length), { min: min, max: max });
}
exports._setHeightMinMax = _setHeightMinMax;
function _setWidthMinMax(min, max, that) {
    if ((that.are === 'absent' || that.is === 'absent') && (min !== null || max !== null)) {
        throw new Error("Cannot set width when structure is absent");
    }
    if (min >= max) {
        throw new Error("Minimum width must be less than maximum width");
    }
    that.length = __assign(__assign({}, that.length), { min: min, max: max });
}
exports._setWidthMinMax = _setWidthMinMax;
/**
 * Sets the number of pairs values.
 *
 * @param min - The minimum number of pairs value (integer).
 * @param max - The maximum number of pairs value (integer).
 */
function _setNumberOfPairsMinMax(min, max, that) {
    that.numberOfPairs = __assign(__assign({}, that.numberOfPairs), { min: min, max: max });
}
exports._setNumberOfPairsMinMax = _setNumberOfPairsMinMax;
/**
 * Sets a single value for rarely minimum.
 *
 * @param rarelyMin - The rarely minimum value (integer).
 */
function _setNumberOfPairsRarelyMin(rarelyMin, that) {
    that.numberOfPairs = __assign(__assign({}, that.numberOfPairs), { rarelyMin: rarelyMin });
}
exports._setNumberOfPairsRarelyMin = _setNumberOfPairsRarelyMin;
/**
 * Sets a single value for rarely maximum.
 *
 * @param rarelyMax - The rarely maximum value (integer).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setNumberOfPairsRarelyMax(rarelyMax, that) {
    that.numberOfPairs = __assign(__assign({}, that.numberOfPairs), { rarelyMax: rarelyMax });
}
exports._setNumberOfPairsRarelyMax = _setNumberOfPairsRarelyMax;
/**
 * Sets the number of seeds values.
 *
 * @param min - The minimum number of pairs value (integer).
 * @param max - The maximum number of pairs value (integer).
 */
function _setNumberOfSeedsMinMax(min, max, that) {
    that.numberOfSeeds = __assign(__assign({}, that.numberOfSeeds), { min: min, max: max });
}
exports._setNumberOfSeedsMinMax = _setNumberOfSeedsMinMax;
/**
 * Sets a single value for rarely minimum.
 *
 * @param rarelyMin - The rarely minimum value (integer).
 */
function _setNumberOfSeedsRarelyMin(rarelyMin, that) {
    that.numberOfSeeds = __assign(__assign({}, that.numberOfSeeds), { rarelyMin: rarelyMin });
}
exports._setNumberOfSeedsRarelyMin = _setNumberOfSeedsRarelyMin;
/**
 * Sets a single value for rarely maximum.
 *
 * @param rarelyMax - The rarely maximum value (integer).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setNumberOfSeedsRarelyMax(rarelyMax, that) {
    that.numberOfSeeds = __assign(__assign({}, that.numberOfSeeds), { rarelyMax: rarelyMax });
}
exports._setNumberOfSeedsRarelyMax = _setNumberOfSeedsRarelyMax;
