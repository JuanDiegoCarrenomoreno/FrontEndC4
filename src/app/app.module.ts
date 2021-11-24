import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListarResidentesComponent } from './components/listar-residentes/listar-residentes.component';
import { CrearResidentesComponent } from './components/crear-residentes/crear-residentes.component';
import { EditarResidentesComponent } from './components/editar-residentes/editar-residentes.component';
import { ListarTrabajadorComponent } from './components/listar-trabajador/listar-trabajador.component';
import { CrearTrabajadorComponent } from './components/crear-trabajador/crear-trabajador.component';
import { EditarTrabajadorComponent } from './components/editar-trabajador/editar-trabajador.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearCursoComponent,
    ListarCursosComponent,
    EditarCursoComponent,
    ListarResidentesComponent,
    CrearResidentesComponent,
    EditarResidentesComponent,
    ListarTrabajadorComponent,
    CrearTrabajadorComponent,
    EditarTrabajadorComponent,
    CrearEventoComponent,
    EditarEventoComponent,
    ListarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
