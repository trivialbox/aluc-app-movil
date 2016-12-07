import {Component, ViewChild, Input} from "@angular/core";
import {Nav, Platform, NavParams, NavController} from "ionic-angular";
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";


@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuPage {
    static cedula;
    public num_cedula;

  @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{title: string, component: any, icon:string}>;

    constructor(public platform: Platform,
                private parametro: NavParams,
                private navCtr: NavController) {

        MenuPage.cedula = this.parametro.get('cedula');
        this.num_cedula = MenuPage.cedula;

        this.pages = [
            {title: 'Validar QR', component: HomePage, icon:"camera"},
            {title: 'Salir', component: LoginPage, icon:"close-circle"}
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
