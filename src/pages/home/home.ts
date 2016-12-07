import {Component, Input} from "@angular/core";
import {BarcodeScanner} from "ionic-native";
import {Nav, AlertController, NavParams} from "ionic-angular";
import {ReservaSrv} from "../../providers/reserva-srv";
import { MenuPage } from '../menu/menu';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [ReservaSrv],
})
export class HomePage {
    public mac = '00:10:49:00:01:02';
    public token = 'aSDkERTYFRsffge';
    public cedula;
    constructor(private nav: Nav,
                private reservaSrv: ReservaSrv,
                private alerta: AlertController,
                private parametros : NavParams) {
            this.cedula = MenuPage.cedula;

    }

    getScanner() {
        BarcodeScanner.scan().then(
            (scanner) => {
                if (scanner.text.length <= 0) {

                } else if (scanner.text.length <= 10 && scanner.text.length >= 1) {
                    this.alertaAluc('El Qr leido no es valido');
                } else {
                    this.validarQr(scanner.text);
                }
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

    private alertaAluc(description) {
        let alerta_aluc = this.alerta.create({
            title: "Aluc",
            subTitle: description,
            buttons: ['OK']
        });
        alerta_aluc.present();
    }

    private validarQr(code_secret) {
        this.reservaSrv.validarReserva(
            this.mac,
            this.token,
            code_secret
        ).subscribe(
            (response) => {
                this.alertaAluc(response.json().description);
            },
            (err) => {
                this.alertaAluc('Error en la conección al servidor');
            }
        )
    }

}
