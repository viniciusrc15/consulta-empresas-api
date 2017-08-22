import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AppConfig } from '../model/app-config';
import { ItipoEmpresa } from "../model/ITipoEmpresa";

@Injectable()
export class TipoEmpresaService {

  constructor(private http: Http, private autSrv: AuthService) {
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  buscarTipos(token, client, uid) {
    return this.http
      .get(AppConfig.host + "/enterprise_types", { headers: this.autSrv.montaCabecalho() })
      .toPromise()
      .then(res => res.json().enterprise_types as ItipoEmpresa[])
      .catch(this.handleError);
  }
}
