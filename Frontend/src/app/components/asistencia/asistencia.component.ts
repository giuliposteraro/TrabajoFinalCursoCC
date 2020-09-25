import { Component, OnInit } from '@angular/core';

import { Asistencia } from '../../models/asistencia';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CursoService } from 'src/app/services/curso.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {

  asistencia: Asistencia;
  alumnos: Alumno[];
  curso: Curso;
  totales: any = [];

  constructor(private route: ActivatedRoute, 
              private router:Router, 
              private asistenciaService: AsistenciaService, 
              private alumnoService: AlumnoService, 
              private cursoService: CursoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.curso.id = +params['idCurso'];
      if(!this.curso.id){
        this.router.navigate(['cursos']);
      }
    })
  this.asistenciaService.getAsistenciaByCurso(this.curso.id).subscribe(data => {
    // console.log("curso: ", data)
    this.asistencia = data;
    this.alumnoService.getAlumnosByIdCurso(this.curso.id).subscribe(data => {
      this.alumnos.push(data);
      this.cursoService.getCursoById(this.curso.id).subscribe(data =>{
        this.curso = data;
        });
      })
    })
  }

}
