interface SearchBookResult {
    /**
     * Search Result Created Datetime
     */
    lastBuildDate: string;
    /**
     * Total Result Numbers
     */
    total: number;
    /**
     * Search Start Page
     */
    start: number;
    /**
     * Displayed Search Item Numbers
     */
    display: number;
    /**
     * Search Results (Book Information)
     */
    items: {
        /**
         * Book Title
         */
        title: string;
        /**
         * Naver Book URL
         */
        link: string;
        /**
         * Book Image URL
         */
        image: string;
        /**
         * Book Author
         */
        author: string;
        /**
         * Book Price
         */
        discount?: string;
        /**
         * Book Publisher Name
         */
        publisher: string;
        /**
         * Book Published Date
         */
        pubdate: string;
        /**
         * Book ISBN Code
         */
        isbn: string;
        /**
         * Book Description
         */
        description: string;
    }[]
}

export { SearchBookResult };
