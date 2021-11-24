import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidentesService } from '../../services/residentes.service';
import { Residentes } from '../../models/Residentes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-residentes',
  templateUrl: './crear-residentes.component.html',
  styleUrls: ['./crear-residentes.component.css']
})
export class CrearResidentesComponent implements OnInit {
  titulo: string;
  residentesForm : FormGroup;

  constructor(private _router: Router,
    private _residentesService: ResidentesService,
     private fb: FormBuilder) { 

      this.residentesForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        apartamento: ['', Validators.required],
      });
    this.titulo = "Crear Residentes";
  }

  ngOnInit(): void {
  }

  addResidentes() : void {
    const residentes : Residentes = {
      cedula: this.residentesForm.get('cedula')?.value,
      nombre: this.residentesForm.get('nombre')?.value,
      apartamento: this.residentesForm.get('apartamento')?.value,
    };
    console.log(residentes);
    this._residentesService.addResidentes(residentes).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-residentes']);
    })
  }

}
