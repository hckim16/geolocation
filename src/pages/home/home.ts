import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: any;
  long: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}
