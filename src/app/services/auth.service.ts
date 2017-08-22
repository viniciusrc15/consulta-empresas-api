import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AuthService {

  isUtenticado = new EventEmitter<boolean>();
  autenticado: boolean;

  constructor() { }

  montaCabecalho(): Headers{
    var cabecalho = new Headers();
    cabecalho.set('Content-Type', 'application/json');
    cabecalho.set('access-token', localStorage.getItem("token"));
    cabecalho.set('client', localStorage.getItem("clientId"));
    cabecalho.set('uid', localStorage.getItem("id"));

    return cabecalho;
  }

  autenticarUsuario(autenticar): void {
    this.autenticado = autenticar;
    this.isUtenticado.emit(autenticar);
  }

  usuarioEstaAutenticado(){
    var isPossuiToken = ( localStorage.getItem('token') == null) ? false : true;
    this.isUtenticado.emit(isPossuiToken);
    return  isPossuiToken;
    
  }
}