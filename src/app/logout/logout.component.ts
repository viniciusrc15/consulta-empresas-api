import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  constructor(private autSvc: AuthService, private router: Router) { }

  deslogar() {
    localStorage.clear();
    this.autSvc.autenticarUsuario(false);
    this.router.navigateByUrl('home');
  }

}