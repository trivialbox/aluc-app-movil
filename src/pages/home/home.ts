
import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native'
import { NavController, AlertController } from 'ionic-angular';
import { ReservaSrv } from '../../providers/reserva-srv';
import {Response} from "@angular/http";
import {_catch} from "rxjs/operator/catch";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ReservaSrv]
})
export class HomePage {
  public mac = '00:10:49:00:01:02';
  public token = 'aSDkERTYFRsffge';
  constructor(private navCtrl: NavController,
              private reservaSrv: ReservaSrv,
              private alerta: AlertController) {
  }

  getScanner(){
    BarcodeScanner.scan().then(
        (scanner) => {
          this.reservaSrv.validarReserva(
              this.mac,
              this.token,
              scanner.text
          ).subscribe(
              (response) => {
                  this.alertaAluc(response.json().description);
              },
              (err) => {
                  this.alertaAluc(err.toString());
              }
          )
        },
        (err) => {

          let alerta_err = this.alerta.create({
            title: "Error",
            subTitle: "No se ha podido leer el qr",
            buttons: ['OK']
          });
          alerta_err.present();
        });
  }

  private alertaAluc(description){
    let alerta_aluc = this.alerta.create({
      title: "Aluc",
      subTitle: description,
      buttons: ['OK']
    });
    alerta_aluc.present();
  }

}
