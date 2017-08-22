import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  investidorName: string;
  constructor() { }

  ngOnInit() {
    this.investidorName = localStorage.getItem('nomeInvestidor');
  }

}
