import { Sources } from "../Sources"

export class Peltate extends Sources {
    /**
     * Are peltate trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Peltate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Density of peltate trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of Peltate trichome.
     */
    constructor() {
        super()
    }
}