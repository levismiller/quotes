import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }
  

  onClose(unFavorite: boolean) {
    this.viewCtrl.dismiss(unFavorite);
  }

}
