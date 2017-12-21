import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = FavoritesPage;
  tab2Root = LibraryPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
