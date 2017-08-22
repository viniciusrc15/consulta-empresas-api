import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { EmpresaService } from '../services/empresa-service';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  nome: string;
  senha: string;
  erroLogin: string;

  constructor(private empService: EmpresaService, private autSvc: AuthService, private router: Router) {
    this.erroLogin = null;
  }

  logar() {
    this.empService.autenticarUsuario(this.nome, this.senha)
      .then(resultado => {

        this.erroLogin = null;

        this.autSvc.autenticarUsuario(true);

        this.darBoasVindas(resultado);

      }).catch(erro => {
        this.erroLogin = "Login ou senha inválida, tente novamente!"
        this.autSvc.autenticarUsuario(false);
      });
  }

  private darBoasVindas(resultado) {
    var token = resultado.headers.get('access-token');
    var clientId = resultado.headers.get('client');
    var id = resultado.headers.get('uid');

    resultado = resultado.json();

    var nomeInvestidor = resultado.investor.investor_name;

    if (resultado.success) {
      this.nome = null;
      this.senha = null;
      localStorage.setItem("nomeInvestidor", nomeInvestidor);
      localStorage.setItem("token", token);
      localStorage.setItem("clientId", clientId);
      localStorage.setItem("id", id);
      this.router.navigateByUrl('dashboard');
    }
  }
}