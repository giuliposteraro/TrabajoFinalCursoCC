import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AlumnoComponent } from './components/alumno/alumno.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'alumnos', component: AlumnoComponent},
  {path: 'alumnos/nuevo', component: AlumnoFormComponent},
  {path: 'alumnos/modificar/:id', component: AlumnoFormComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
