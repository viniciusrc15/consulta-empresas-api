import { ItipoEmpresa } from './../model/ITipoEmpresa';
import { IEmpresa } from './../model/IEmpresa';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'empresa-detail',
  templateUrl: './empresa-detail.component.html'
})
export class EmpresaDetailComponent implements OnInit {
 @Input() empresa: IEmpresa[];

  constructor() { }

  ngOnInit() {
  }
}
