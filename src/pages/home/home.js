var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController, AlertController } from 'ionic-angular';
import { ReservaSrv } from '../../providers/reserva-srv';
export var HomePage = (function () {
    function HomePage(navCtrl, reservaSrv, alerta) {
        this.navCtrl = navCtrl;
        this.reservaSrv = reservaSrv;
        this.alerta = alerta;
        this.mac = '00:10:49:00:01:02';
        this.token = 'aSDkERTYFRsffge';
    }
    HomePage.prototype.getScanner = function () {
        var _this = this;
        BarcodeScanner.scan().then(function (scanner) {
            _this.reservaSrv.validarReserva(_this.mac, _this.token, scanner.text).subscribe(function (response) {
                _this.alertaAluc(response.json().description);
            }, function (err) {
                _this.alertaAluc(err.toString());
            });
        }, function (err) {
            var alerta_err = _this.alerta.create({
                title: "Error",
                subTitle: "No se ha podido leer el qr",
                buttons: ['OK']
            });
            alerta_err.present();
        });
    };
    HomePage.prototype.alertaAluc = function (description) {
        var alerta_aluc = this.alerta.create({
            title: "Aluc",
            subTitle: description,
            buttons: ['OK']
        });
        alerta_aluc.present();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: [ReservaSrv]
        }), 
        __metadata('design:paramtypes', [NavController, ReservaSrv, AlertController])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map