import { Component, ViewChild } from '@angular/core';
import {  Nav, Platform, NavParams, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  public cedula;

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, data: JSON}>;

  constructor(public platform: Platform,
              private parametro: NavParams,
              private navCtr: NavController) {

    this.cedula = parametro.get('cedula');

    this.pages = [
      { title: 'Validar QR', component: HomePage, data:this.cedula},
      { title: 'Salir', component: LoginPage, data: undefined}
    ];
  }

  openPage(page) {
    if (page.title == 'Salir'){
      this.navCtr.setRoot(LoginPage);
    }else{
      this.nav.setRoot(page.component);

    }
  }

}
