export class Source {
    /**
     * Obra princeps?
     * 
     * @remarks
     * This is an original publication (*obra princeps*)?
     * - **yes**
     */
    obraPrinceps: 'yes'

    /**
     * Method of obtaining the source.
     */
    obtainingMethod:
        'nakedEyes' |
        'stereoscope' |
        'opticalMicroscope' |
        'scanningElectronMicroscope' |
        'tranmissionElectronMicroscope' |
        'photo' |
        'drawing' |
        (
            'nakedEyes' |
            'stereoscope' |
            'opticalMicroscope' |
            'opticalMicroscopy' |
            'tranmissionElectronMicroscope' |
            'photo' |
            'drawing'
        )[]

    /**
     * Type of the source.
     */
    sourceType: 'article' | 'book' | 'chapterOfBook' | 'misc'

    /**
     * Authorship. Concatenate authors using this string: ' & '.
     */
    authorship: string

    /**
     * Year.
     */
    year: string

    /**
     * Title.
     */
    title: string

    /**
     * Journal
     */
    journal: string

    /**
     * Number
     */
    number: string

    /**
     * Volume
     */
    volume: string

    /**
     * Pages.
     * 
     * @type string
     */
    pages: string

    /**
     * Figure.
     */
    figure: string

    /**
     * DOI.
     */
    doi: string

    /**
     * Describe Source.
     */
    constructor() { }
}