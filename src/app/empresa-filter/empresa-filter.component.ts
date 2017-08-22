import { IEmpresa } from './../model/IEmpresa';
import { AuthService } from './../services/auth.service';
import { ItipoEmpresa } from './../model/ITipoEmpresa';
import { Component, OnInit } from '@angular/core';
import { TipoEmpresaService } from '../services/tipo-empresa.service';
import { EmpresaService } from '../services/empresa-service';

@Component({
  selector: 'empresa-filter',
  templateUrl: './empresa-filter.component.html',
  providers:  [ 
    TipoEmpresaService,
    EmpresaService
  ]
})
export class EmpresaFilterComponent implements OnInit {
empresas: IEmpresa[];
tiposEmpresas: ItipoEmpresa[];
tipoSelecionado: number;
nome: string;
exibeEmpresas: boolean;
erroFiltro: string;

  constructor(private tipoSvc: TipoEmpresaService, private empSvc: EmpresaService, private autSvc: AuthService) {
    this.erroFiltro = null;
  }
  
  ngOnInit() {
   this.preencheTipos();
  }
  filterEmpresas(){
    let filtro = this.montaUrlTipo();
    if(filtro == null){
      return;
    }
    
    this.empSvc.procuraEmpresasFiltro(filtro)
      .then(resultado =>{
          this.erroFiltro = null;
          this.empresas = resultado;
          this.exibeEmpresas = true;
      })
      .catch(erro =>{
        this.exibeEmpresas = false;
      });
  }
    
  private preencheTipos(): void{
    var token = localStorage.getItem("token");
    var clientId = localStorage.getItem("clientId");
    var id = localStorage.getItem("id");
    this.tipoSvc.buscarTipos(token, clientId, id)
    .then(resultado => {
      this.tiposEmpresas = resultado;
      this.tiposEmpresas.unshift({id: undefined, enterprise_type_name: "-----"});
      });
  }

  private montaUrlTipo(): string{
    if(this.tipoSelecionado != undefined && this.nome != undefined && this.nome != ""){
      return "?enterprise_types=" + this.tipoSelecionado + "&name=" + this.nome;
    }
    if(this.tipoSelecionado != undefined){
      return "?enterprise_types=" + this.tipoSelecionado;
    }
    if(this.nome != undefined && this.nome != ""){
      return "?name=" + this.nome;
    }
    this.erroFiltro = "Insira pelo menos uma informação em um dos campos!";
    return null;
  }
}
