import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { CursoService } from 'src/app/services/curso.service';
import * as moment from 'moment';
import { Alumno } from 'src/app/models/alumno';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Asistencia } from 'src/app/models/asistencia';
import { map,filter, count } from 'rxjs/operators';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  alumnos:Observable<any>;
  cursos:Observable<any>;
  asistencias:Observable<any>;
  totales: any = [];
  
  constructor(private alumnoService: AlumnoService, 
              private cursoService: CursoService,
              private asistenciaService: AsistenciaService) { }

  ngOnInit(): void {
    this.obtenerCursos();
    this.obtenerAlumnos();
    this.obtenerAsistencias();
    this.setReportes();
  }

  obtenerCursos(){
    this.cursos = this.cursoService.getCursos();
  }

  obtenerAlumnos(){
    this.alumnos = this.alumnoService.getAlumnos();
  }

  obtenerAsistencias(){
    this.asistencias = this.asistenciaService.getAsistencias();
  }

  setReportes(){
    var totales = [];
    this.cursos.forEach(curso => {
      let alumnos = this.alumnos.pipe(map(alumnos => alumnos.filter(al => al.curso == curso)));
      let asistencias = this.asistencias.pipe(map(asis => asis.filter(el => el.curso == curso)));
      let cantClases = 0;
      let pagos = 0;
      alumnos.forEach(alumno => {
        pagos += this.cuotaAlDia(alumno.fechaPago);
        let cant = asistencias.pipe(filter(asis => asis.numSocio == alumno.numSocio)).pipe(count());
      })
      let presentes = asistencias.pipe(filter(el => el.fecha)).pipe(count());
      let index = totales.findIndex(el => el.nivel.toLowerCase().trim() == curso.nivel.toLowerCase().trim());
      if(index == -1){
        totales.push({
          nivel: curso.nivel.toLowerCase(),
          cantCursos: 1,
          cantPresentes: presentes,
          cantClases: cantClases,
          cantAlumnos: alumnos.pipe(count()),
          cantPagos: pagos
        })
      }else{
        totales[index].cantPresentes += presentes;
        totales[index].cantClases += cantClases;
        totales[index].cantAlumnos += alumnos.pipe(count());
        totales[index].cantCursos += 1;
        totales[index].cantPagos += pagos;
      }
    });
    this.totales = totales
  }
  
  cuotaAlDia(fecha): number{
    let mom = moment(fecha).add(1, 'month');
    let now = moment();
    return mom.isAfter(now)?1:0 ;
  }
}
