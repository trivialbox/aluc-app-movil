
import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native'
import { NavController, AlertController } from 'ionic-angular';
import { ReservaSrv } from '../../providers/reserva-srv';
import {Response} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ReservaSrv]
})
export class HomePage {
  public mac;
  public token;
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
              scanner.toString()
          ).map(
              (response: Response) => {
                  this.alertaAluc(response.json().description);
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
