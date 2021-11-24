import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/Curso';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  titulo: string;
  cursoForm : FormGroup;

  constructor(private _router: Router,
    private _cursoService: CursoService,
     private fb: FormBuilder) { 

      this.cursoForm = this.fb.group({
        codigo: ['', Validators.required],
        nombre: ['', Validators.required],
        modalidad: ['', Validators.required],
        jornada: ['', Validators.required],
      });
    this.titulo = "Crear Curso";
  }

  ngOnInit(): void {
  }

  addCurso() : void {
    const curso : Curso = {
      codigo: this.cursoForm.get('codigo')?.value,
      nombre: this.cursoForm.get('nombre')?.value,
      modalidad: this.cursoForm.get('modalidad')?.value,
      jornada: this.cursoForm.get('jornada')?.value
    };
    console.log(curso);
    this._cursoService.addCurso(curso).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-cursos']);
    })
  }

}
