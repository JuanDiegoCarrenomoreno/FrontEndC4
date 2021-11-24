import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ResidentesService } from '../../services/residentes.service';
import { Residentes } from '../../models/Residentes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-residentes',
  templateUrl: './editar-residentes.component.html',
  styleUrls: ['./editar-residentes.component.css']
})
export class EditarResidentesComponent implements OnInit {
  residentesForm : FormGroup;
  id: string | null;

  constructor(private _router: Router,
    private _residentesService: ResidentesService,
     private fb: FormBuilder,
     private aRouter: ActivatedRoute) { 

      this.residentesForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        apartamento: ['', Validators.required],
      });
      
      this.id = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.id);
     }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    if (this.id!==null){
      this._residentesService.getResidente(this.id).subscribe(data => {
        console.log(data);
        this.residentesForm.setValue({
          cedula: data.residentes.cedula,
          nombre: data.residentes.nombre,
          apartamento: data.residentes.apartamento
        });
      })
    }
  }

  updateResidentes(): void {
    const residentes : Residentes = {
      cedula: this.residentesForm.get('cedula')?.value,
      nombre: this.residentesForm.get('nombre')?.value,
      apartamento: this.residentesForm.get('apartamento')?.value
    };
    console.log(residentes);
    this._residentesService.updateResidentes(this.id, residentes).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-residentes'])
    })
  }

}
