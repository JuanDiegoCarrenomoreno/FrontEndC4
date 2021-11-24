import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/Curso';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  listaCursos : Curso[] = [];
  //cursoForm : FormGroup;

  constructor(private _router: Router,
              private _cursoService: CursoService) {
              //, private fb: FormBuilder) {

                /*this.cursoForm = this.fb.group({
                  codigo: ['', Validators.required],
                  nombre: ['', Validators.required],
                  modalidad: ['', Validators.required],
                  jornada: ['', Validators.required],
                });*/
              }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this._cursoService.getCursos().subscribe(data => {
      console.log(data);
      this.listaCursos = data.cursos;
    });
  }

  deleteCurso(id: any): void {
    this._cursoService.deleteCurso(id).subscribe(data => {
      console.log(data);
      this.getCursos();
    })
  }

}
