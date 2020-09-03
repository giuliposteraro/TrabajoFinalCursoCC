import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AlumnoComponent } from './components/alumno-components/alumno/alumno.component';
import { AlumnoFormComponent } from './components/alumno-components/alumno-form/alumno-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoService } from './services/alumno.service';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { CursoComponent } from './components/cursos-component/curso/curso.component';
import { CursoService } from './services/curso.service';
import { CursoFormComponent } from './components/cursos-component/curso-form/curso-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    AlumnoComponent,
    AlumnoFormComponent,
    ListaAlumnosComponent,
    CursoComponent,
    CursoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [AlumnoService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
