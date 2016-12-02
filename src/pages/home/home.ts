import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native'
import { NavController } from 'ionic-angular';
import { ReservaSrv } from '../../providers/reserva-srv';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ReservaSrv]
})
export class HomePage {
  public mac;
  public token;
  constructor(private navCtrl: NavController,
              private reservaSrv: ReservaSrv) {
  }

  getScanner(){
    BarcodeScanner.scan().then(
        (scanner) => {

        },
        (err) => {

        });
  }

}
