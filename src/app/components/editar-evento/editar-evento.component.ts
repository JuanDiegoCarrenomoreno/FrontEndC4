import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  eventoForm : FormGroup;
  id: string | null;

  constructor(private _router: Router,
    private _eventoService: EventoService,
     private fb: FormBuilder,
     private aRouter: ActivatedRoute) { 

      this.eventoForm = this.fb.group({
        nombre: ['', Validators.required],
        fecha: ['', Validators.required]
      });
      
      this.id = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.id);
     }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    if (this.id!==null){
      this._eventoService.getEvento(this.id).subscribe(data => {
        console.log(data);
        this.eventoForm.setValue({
          nombre: data.evento.nombre,
          fecha: data.evento.fecha,
        });
      })
    }
  }

  updateEvento(): void {
    const evento : Evento = {
      nombre: this.eventoForm.get('nombre')?.value,
      fecha: this.eventoForm.get('fecha')?.value
    };
    console.log(evento);
    this._eventoService.updateEvento(this.id, evento).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-evento'])
    })
  }

}
