// Import methods
import { _setLength, _setLengthMinMax } from '../../../../methods/sizes';

// Import annotation classes
import { Sources } from "../../../../Sources";

export class DistanceFromPinnaPulvinus extends Sources {
    /**
     * Distance of paraphillidia pair from pinna-pulvinus, length in milimeters (mm).
     */
    length: {
        value?: number | null;
        min?: number | null;
        max?: number | null;
    } | null;

    /**
     * Creates an instance of distance of paraphillidia from pinna-pulvinus.
     */
    constructor() {
        super();
    }

    /**
     * Sets the length values, considering the value of `present`.
     *
     * @param min - The minimum length value in milimeters (mm).
     * @param max - The maximum length value in milimeters (mm).
     */
    setLengthMinMax(min: number, max: number): void {
        _setLengthMinMax(min, max, this);
    }

    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLength(value: number | null): void {
        _setLength(value, this);
    }
}
