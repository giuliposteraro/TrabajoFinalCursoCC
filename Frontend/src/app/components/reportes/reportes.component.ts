import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Curso } from 'src/app/models/curso';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  alumnos: Alumno[];
  cursos: Curso[];
  asistencias: Observable<Asistencia>;
  curso:Curso = new Curso();
  totalAlumnos:number;
  
  constructor(private alumnoService: AlumnoService, 
              private cursoService: CursoService,
              private asistenciaService: AsistenciaService) { }

  ngOnInit(): void {
    this.obtenerCursos();
    this.obtenerAlumnos();
    this.totalAlumnos = this.alumnosEnCurso(this.curso);
  }

  obtenerCursos(){
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    })
  }

  obtenerAlumnos(){
    this.alumnoService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    })
  }

  alumnosEnCurso(curso: Curso): number{
    return this.alumnos.filter(a => {a.curso == curso}).length;
  }

}
