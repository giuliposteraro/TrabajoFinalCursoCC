import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import {MessageService} from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlumnoComponent } from './components/alumno-components/alumno/alumno.component';
import { AlumnoFormComponent } from './components/alumno-components/alumno-form/alumno-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoComponent } from './components/cursos-component/curso/curso.component';
import { CursoFormComponent } from './components/cursos-component/curso-form/curso-form.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { AsistenciaService } from './services/asistencia.service';
import { EditarCursoComponent } from './components/cursos-component/editar-curso/editar-curso.component';
import { EditarAlumnoComponent } from './components/alumno-components/editar-alumno/editar-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlumnoComponent,
    AlumnoFormComponent,
    CursoComponent,
    CursoFormComponent,
    AsistenciaComponent,
    EditarCursoComponent,
    EditarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    FileUploadModule
  ],
  providers: [AsistenciaService, DatePipe, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
