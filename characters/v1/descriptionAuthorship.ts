interface IDescriptionAuthorship {
    /**
     * Author name of description
     */
    name: string
    
    /**
     * Date in Unix timestamp
     */
    date: number
}

class DescriptionAuthorship {
    /**
    * Authorship.
    */
    authorship: IDescriptionAuthorship[]

    constructor() {
        this.authorship = []
    }

    /**
     * Adds an author to the authorship list.
     * @param {string} name - The author name of the description.
     * @param {number} date - The timestamp representing the date.
     */
    public addAuthor(data: IDescriptionAuthorship): void {
        this.authorship.push(data)
    }
}

export {
    IDescriptionAuthorship,
    DescriptionAuthorship
}