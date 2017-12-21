import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private settingsService: SettingsService,
    private modalCtrl: ModalController) {
  }


  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  onRemoveFromFavorites(quote: Quote) {
    this.removeFavorite(quote);
  }

  removeFavorite(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
  

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((unFavorite: boolean) => {
      if(unFavorite) {
        this.removeFavorite(quote);
      }
    })
  }

}
