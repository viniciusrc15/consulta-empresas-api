import { AuthService } from './auth.service';
import { IEmpresa } from './../model/IEmpresa';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AppConfig } from '../model/app-config';

@Injectable()
export class EmpresaService {

  constructor(private http: Http,private autSrv: AuthService) { }

  autenticarUsuario(email, senha) {
    var credenciais = { email: email, password: senha };
    var cabecalho = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post(AppConfig.host + "/users/auth/sign_in", JSON.stringify(credenciais), { headers: cabecalho })
      .toPromise()
      .then(res => res)
      .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  procuraEmpresas() {
    return this.http
      .get(AppConfig.host + "/enterprises", { headers: this.autSrv.montaCabecalho() })
      .toPromise()
      .then(res => res.json().enterprises as IEmpresa[])
      .catch(this.handleError);
  }

  procuraEmpresasFiltro(filtro: string) {
    return this.http
      .get(AppConfig.host + "/enterprises" + filtro, { headers: this.autSrv.montaCabecalho() })
      .toPromise()
      .then(res => res.json().enterprises as IEmpresa[])
      .catch(this.handleError);
  }
}