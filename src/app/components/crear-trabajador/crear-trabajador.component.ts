import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/trabajador.service';
import { Trabajador } from '../../models/Trabajador';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-trabajador',
  templateUrl: './crear-trabajador.component.html',
  styleUrls: ['./crear-trabajador.component.css']
})
export class CrearTrabajadorComponent implements OnInit {
  titulo: string;
  trabajadorForm : FormGroup;

  constructor(private _router: Router,
    private _trabajadorService: TrabajadorService,
     private fb: FormBuilder) { 

      this.trabajadorForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        cargo: ['', Validators.required],
        sueldo: ['', Validators.required],
      });
    this.titulo = "Crear Trabajador";
  }

  ngOnInit(): void {
  }

  addTrabajador() : void {
    const trabajador : Trabajador = {
      cedula: this.trabajadorForm.get('cedula')?.value,
      nombre: this.trabajadorForm.get('nombre')?.value,
      cargo: this.trabajadorForm.get('cargo')?.value,
      sueldo: this.trabajadorForm.get('sueldo')?.value
    };
    console.log(trabajador);
    this._trabajadorService.addTrabajador(trabajador).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-trabajador']);
    })
  }

}
