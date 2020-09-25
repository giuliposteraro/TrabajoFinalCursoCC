import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlumnoComponent } from './components/alumno-components/alumno/alumno.component';
import { AlumnoFormComponent } from './components/alumno-components/alumno-form/alumno-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoService } from './services/alumno.service';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { CursoComponent } from './components/cursos-component/curso/curso.component';
import { CursoService } from './services/curso.service';
import { CursoFormComponent } from './components/cursos-component/curso-form/curso-form.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { AsistenciaService } from './services/asistencia.service';
import { EditarCursoComponent } from './components/cursos-component/editar-curso/editar-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlumnoComponent,
    AlumnoFormComponent,
    ListaAlumnosComponent,
    CursoComponent,
    CursoFormComponent,
    AsistenciaComponent,
    EditarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  providers: [AlumnoService, AsistenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
