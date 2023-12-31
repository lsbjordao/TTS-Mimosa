import { Trichomes } from '../../../Trichomes';
import { Prickles } from '../../../Prickles';
import { Sources } from "../../../Sources";

import { 
    _setLength, 
    _setLengthMinMax, 
    _setLengthRarelyMin, 
    _setLengthRarelyMax 
} from '../../../methods/sizes';

export class Rachilla extends Sources {
    /**
     * Rachilla can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Rachilla length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: {
        value?: number | null;
        min?: number | null;
        max?: number | null;
    } | null;

    /**
     * Prickles in rachilla.
    */
    prickles: Prickles;

    /**
     * Trichomes in rachilla.
     */
    trichomes: Trichomes;

    /**
     * Creates an instance of Rachilla.
     */
    constructor() {
        super();
    }

    /**
     * Sets the length values, considering the value of `present`.
     *
     * @param min - The minimum length value in milimeters (mm).
     * @param max - The maximum length value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    setLengthMinMax(min: number, max: number): void {
        _setLengthMinMax(min, max, this);
    }

    /**
     * Sets a single value for rarely minimum.
     *
     * @param rarelyMin - The rarely minimum value (integer).
     */
    setLengthRarelyMin(min: number): void {
        _setLengthRarelyMin(min, this);
    }

    /**
     * Sets a single value for rarely maximum.
     *
     * @param rarelyMax - The rarely maximum value (integer).
     */
    setLengthRarelyMax(max: number): void {
        _setLengthRarelyMax(max, this);
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
