import { ItipoEmpresa } from './../model/ITipoEmpresa';
import { IEmpresa } from './../model/IEmpresa';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { EmpresaService } from '../services/empresa-service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html'
})
export class EmpresaListComponent implements OnInit {

  @Input() empresas: IEmpresa[];
  id: number;
  empresaSelecionada: IEmpresa;

  constructor(private empService: EmpresaService, private router: Router) { }

  ngOnInit() {
    if (this.empresas == undefined || this.empresas == null) {
      this.buscarEmpresas();
    }
  }

  buscarEmpresas(): void {
    var token = localStorage.getItem("token");
    var clientId = localStorage.getItem("clientId");
    var id = localStorage.getItem("id");
    this.empService.procuraEmpresas()
      .then(resultado => {
        this.empresas = resultado;
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  buscaId(id: number): number {
    return id;
  }

  emSelecao(empresa: IEmpresa): void {
    this.empresaSelecionada = empresa;
  }
}