import { Injectable } from '@angular/core';
import { Http , Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ReservaSrv {

  constructor(private http: Http) {
  }

  /*post(url, parametros(body), {headers:headers})*/

  validarReserva(
      mac,
      token,
      secret_code
  ){
    let headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(
        "http://192.168.1.2:8000/reservas/verificar/",
        this.getParametros(mac, token, secret_code),
        {headers:headers}
    );

  }

  private getParametros(mac, token, secret_code){
    let urlParametros = new URLSearchParams();
    urlParametros.append('mac', mac);
    urlParametros.append('token', token);
    urlParametros.append('secret_code', secret_code);

    return urlParametros.toString();
  }

}
