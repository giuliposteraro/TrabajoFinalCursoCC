import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AlumnoComponent } from './components/alumno-components/alumno/alumno.component';
import { AlumnoFormComponent } from './components/alumno-components/alumno-form/alumno-form.component';
import { CursoComponent } from './components/cursos-component/curso/curso.component';
import { CursoFormComponent } from './components/cursos-component/curso-form/curso-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alumnos', component: AlumnoComponent},
  {path: 'alumnos/nuevo', component: AlumnoFormComponent},
  {path: 'alumnos/:id', component: AlumnoFormComponent},
  {path: 'cursos', component: CursoComponent},
  {path: 'cursos/nuevo', component: CursoFormComponent},
  {path: 'cursos/:id', component: CursoFormComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
