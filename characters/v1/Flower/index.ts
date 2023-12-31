import { Bracteole } from "./Bracteole";
import { Corolla } from "./Corolla";
import { Calyx } from "./Calyx";
import { Sources } from "../Sources";

class Flower extends Sources {
    /**
     * Merism.
     */
    merism:
        '3-merous' |
        '4-merous' |
        '5-merous' |
        '6-merous' |
        (
            '3-merous' |
            '4-merous' |
            '5-merous' |
            '6-merous'
        )[]

    /**
     * Merism rarely.
     */
    merismRarely:
        '3-merous' |
        '4-merous' |
        '5-merous' |
        '6-merous' |
        (
            '3-merous' |
            '4-merous' |
            '5-merous' |
            '6-merous'
        )[]

    /**
     * Number of whrols of stamnes.
     */
    numberWhorlsOfStamens:
        'isostemonous' |
        'diplostemonous'

    /**
     * Bracteole.
     */
    bracteole: Bracteole;

    /**
     * Calyx.
     */
    calyx: Calyx;

    /**
     * Corolla.
     */
    corolla: Corolla;

    /**
     * Creates an instance of Flower.
     */
    constructor() {
        super();
    }
}

export {
    Flower,
    Bracteole,
    Corolla,
    Calyx
}