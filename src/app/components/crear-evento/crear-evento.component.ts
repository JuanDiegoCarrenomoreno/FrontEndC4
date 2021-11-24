import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  titulo: string;
  eventoForm : FormGroup;

  constructor(private _router: Router,
    private _eventoService: EventoService,
     private fb: FormBuilder) { 

      this.eventoForm = this.fb.group({
        nombre: ['', Validators.required],
        fecha: ['', Validators.required]
      });
    this.titulo = "Crear Evento";
  }

  ngOnInit(): void {
  }

  addEvento() : void {
    const evento : Evento = {
      nombre: this.eventoForm.get('nombre')?.value,
      fecha: this.eventoForm.get('fecha')?.value
    };
    console.log(evento);
    this._eventoService.addEvento(evento).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-evento']);
    })
  }
}
