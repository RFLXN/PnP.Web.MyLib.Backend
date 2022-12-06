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

interface SearchMovieResult {
    lastBuildDate: string;
    total: number;
    start: number;
    display: number;
    items: {
        title: string;
        link: string;
        image: string;
        subtitle: string;
        pubDate: string;
        director: string;
        actor: string;
        userRating: string;
    }[]
}

export { SearchBookResult, SearchMovieResult };
