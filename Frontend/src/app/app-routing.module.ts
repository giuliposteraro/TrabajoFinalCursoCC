import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AlumnoComponent } from './components/alumno-components/alumno/alumno.component';
import { AlumnoFormComponent } from './components/alumno-components/alumno-form/alumno-form.component';
import { CursoComponent } from './components/cursos-component/curso/curso.component';
import { CursoFormComponent } from './components/cursos-component/curso-form/curso-form.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { EditarCursoComponent } from './components/cursos-component/editar-curso/editar-curso.component';
import { EditarAlumnoComponent } from './components/alumno-components/editar-alumno/editar-alumno.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ReportesComponent } from './components/reportes/reportes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alumnos', component: AlumnoComponent},
  {path: 'alumnos/nuevo', component: AlumnoFormComponent},
  {path: 'alumnos/:numSocio', component: EditarAlumnoComponent},
  {path: 'cursos', component: CursoComponent},
  {path: 'cursos/nuevo', component: CursoFormComponent},
  {path: 'cursos/:id', component: EditarCursoComponent},
  {path: 'asistencias', component: AsistenciaComponent},
  {path: 'asistencias/:numSocio', component: AsistenciaComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
