import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  autenticado: boolean;
  title = 'app';
  nomeLink: string;
  constructor(private autSvc: AuthService) {

    this.autSvc.isUtenticado.subscribe(autenticou => {
      this.autenticado = autenticou;
    });


  }
}
