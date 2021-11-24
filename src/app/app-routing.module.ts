import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { CrearResidentesComponent } from './components/crear-residentes/crear-residentes.component';
import { EditarResidentesComponent } from './components/editar-residentes/editar-residentes.component';
import { ListarResidentesComponent } from './components/listar-residentes/listar-residentes.component';
import { CrearTrabajadorComponent } from './components/crear-trabajador/crear-trabajador.component';
import { EditarTrabajadorComponent } from './components/editar-trabajador/editar-trabajador.component';
import { ListarTrabajadorComponent } from './components/listar-trabajador/listar-trabajador.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'crear-curso', component: CrearCursoComponent},
  {path: 'editar-curso/:id', component: EditarCursoComponent},
  {path: 'listar-cursos', component: ListarCursosComponent},
  {path: 'crear-residentes', component: CrearResidentesComponent},
  {path: 'editar-residentes/:id', component: EditarResidentesComponent},
  {path: 'listar-residentes', component: ListarResidentesComponent},
  {path: 'crear-trabajador', component: CrearTrabajadorComponent},
  {path: 'editar-trabajador/:id', component: EditarTrabajadorComponent},
  {path: 'listar-trabajador', component: ListarTrabajadorComponent},
  {path: 'crear-evento', component: CrearEventoComponent},
  {path: 'editar-evento/:id', component: EditarEventoComponent},
  {path: 'listar-evento', component: ListarEventoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
