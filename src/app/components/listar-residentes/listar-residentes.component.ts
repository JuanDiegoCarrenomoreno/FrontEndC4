import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ResidentesService } from '../../services/residentes.service';
import { Residentes } from '../../models/Residentes';



@Component({
  selector: 'app-listar-residentes',
  templateUrl: './listar-residentes.component.html',
  styleUrls: ['./listar-residentes.component.css']
})
export class ListarResidentesComponent implements OnInit {

  listaResidentes : Residentes[] = [];


  constructor(private _router: Router,
              private _residentesService: ResidentesService) { }

  ngOnInit(): void {
    this.getResidentes();
  }

  getResidentes(): void {
    this._residentesService.getResidentes().subscribe(data => {
      console.log(data);
      this.listaResidentes = data.residentes;
    });
  }

  deleteResidentes(id: any): void {
    this._residentesService.deleteResidentes(id).subscribe(data => {
      console.log(data);
      this.getResidentes();
    })
  }
}
