import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/trabajador.service';
import { Trabajador } from '../../models/Trabajador';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-listar-trabajador',
  templateUrl: './listar-trabajador.component.html',
  styleUrls: ['./listar-trabajador.component.css']
})
export class ListarTrabajadorComponent implements OnInit {

  listaTrabajador : Trabajador[] = [];


  constructor(private _router: Router,
              private _trabajadorService: TrabajadorService) { }

  ngOnInit(): void {
    this.getTrabajadores();
  }

  getTrabajadores(): void {
    this._trabajadorService.getTrabajadores().subscribe(data => {
      console.log(data);
      this.listaTrabajador = data.trabajadores;
    });
  }

  deleteTrabajador(id: any): void {
    this._trabajadorService.deleteTrabajador(id).subscribe(data => {
      console.log(data);
      this.getTrabajadores();
    })
  }

}
