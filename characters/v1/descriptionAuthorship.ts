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
     *
     * @param data - An object containing the author name and date.
     */
    public addAuthor(data: IDescriptionAuthorship): void {
        this.authorship.push(data)
    }
}

export {
    IDescriptionAuthorship,
    DescriptionAuthorship
}
