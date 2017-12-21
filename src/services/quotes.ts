import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id === quote.id;
        });
        this.favoriteQuotes.splice(position, 1)
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        })
    }

}