import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {

  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yea',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'nope',
          role: 'cancel',
          handler: () => {
            console.log('nope');
          }
        }
      ]
    })
    alert.present();
  }


}

