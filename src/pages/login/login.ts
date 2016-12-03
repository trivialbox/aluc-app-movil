import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public cedula = '1103470122';
  public password = 'Jeikers';

  constructor(private navCtrl: NavController,
              private loadingCtrl : LoadingController) {}

  entrar(){
    let loader = this.loadingCtrl.create({
      content: "Espere por favor...",
    });
    loader.present();

    setTimeout(() => {
      this.navCtrl.setRoot(MenuPage,{
        'cedula':this.cedula
      });

      loader.dismiss();
    }, 500);

  }

}
