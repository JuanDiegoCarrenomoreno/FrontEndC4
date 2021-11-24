import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';



@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  listaEvento : Evento[] = [];


  constructor(private _router: Router,
              private _eventoService: EventoService) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(): void {
    this._eventoService.getEventos().subscribe(data => {
      console.log(data);
      this.listaEvento = data.eventos;
    });
  }

  deleteEvento(id: any): void {
    this._eventoService.deleteEvento(id).subscribe(data => {
      console.log(data);
      this.getEventos();
    })
  }

}
