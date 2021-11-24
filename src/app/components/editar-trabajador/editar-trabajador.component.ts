import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { TrabajadorService } from '../../services/trabajador.service';
import { Trabajador } from '../../models/Trabajador';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {
  trabajadorForm : FormGroup;
  id: string | null;

  constructor(private _router: Router,
    private _trabajadorService: TrabajadorService,
     private fb: FormBuilder,
     private aRouter: ActivatedRoute) { 

      this.trabajadorForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        cargo: ['', Validators.required],
        sueldo: ['', Validators.required],
      });
      
      this.id = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.id);
     }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    if (this.id!==null){
      this._trabajadorService.getTrabajador(this.id).subscribe(data => {
        console.log(data);
        this.trabajadorForm.setValue({
          cedula: data.trabajador.cedula,
          nombre: data.trabajador.nombre,
          cargo: data.trabajador.cargo,
          sueldo: data.trabajador.sueldo,
        });
      })
    }
  }

  updateTrabajador(): void {
    const trabajador : Trabajador = {
      cedula: this.trabajadorForm.get('cedula')?.value,
      nombre: this.trabajadorForm.get('nombre')?.value,
      cargo: this.trabajadorForm.get('cargo')?.value,
      sueldo: this.trabajadorForm.get('sueldo')?.value
    };
    console.log(trabajador);
    this._trabajadorService.updateTrabajador(this.id, trabajador).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-trabajador'])
    })
  }

}
