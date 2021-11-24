import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/Curso';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  cursoForm : FormGroup;
  id: string | null;

  constructor(private _router: Router,
    private _cursoService: CursoService,
     private fb: FormBuilder,
     private aRouter: ActivatedRoute) { 

      this.cursoForm = this.fb.group({
        codigo: ['', Validators.required],
        nombre: ['', Validators.required],
        modalidad: ['', Validators.required],
        jornada: ['', Validators.required],
      });
      
      this.id = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.id);
     }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    if (this.id!==null){
      this._cursoService.getCurso(this.id).subscribe(data => {
        console.log(data);
        this.cursoForm.setValue({
          codigo: data.curso.codigo,
          nombre: data.curso.nombre,
          modalidad: data.curso.modalidad,
          jornada: data.curso.jornada,
        });
      })
    }
  }

  updateCurso(): void {
    const curso : Curso = {
      codigo: this.cursoForm.get('codigo')?.value,
      nombre: this.cursoForm.get('nombre')?.value,
      modalidad: this.cursoForm.get('modalidad')?.value,
      jornada: this.cursoForm.get('jornada')?.value
    };
    console.log(curso);
    this._cursoService.updateCurso(this.id, curso).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-cursos'])
    })
  }
}
