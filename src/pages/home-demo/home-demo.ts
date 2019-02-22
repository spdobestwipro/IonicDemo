import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the HomeDemo page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-home-demo',
  templateUrl: 'home-demo.html',
})
export class HomeDemo {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDemo');
  }

}
