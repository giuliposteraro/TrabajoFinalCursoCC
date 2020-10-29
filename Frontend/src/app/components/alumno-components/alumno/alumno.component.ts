import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Curso } from 'src/app/models/curso';
import { Asistencia } from 'src/app/models/asistencia';
import { DatePipe } from '@angular/common';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {
  
  alumnos: Observable<Alumno[]>;
  isupdated: boolean = false; 
  alumno: Alumno = new Alumno();
  asistencia: Asistencia = new Asistencia();

  constructor(private alumnoService: AlumnoService, 
              private router: Router,
              private confirmationService: ConfirmationService,
              private asistenciaService: AsistenciaService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.alumnos = this.alumnoService.getAlumnos();
  }

  confirm(numSocio: number) {
    this.confirmationService.confirm({
        message: 'Confirmar eliminación?', 
        accept: () => {
            this.deleteAlumno(numSocio);
        }
    });
  }
  deleteAlumno(id: number): void {
    this.alumnoService.delete(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/alumnos']);
  }
  
  updateAlumno(numSocio: number){
    this.router.navigate(['alumnos/', numSocio]);
  }

  changeisUpdate(){  
    this.isupdated=false;  
  }    
  goBack(): void{
    this.router.navigate(['/alumnos']);
  }
  editAlumno(alumno: Alumno){
    this.router.navigate(['/alumnos', this.alumnoService.getAlumnoById(alumno.numSocio)])
  }

  darPresente(alumno: Alumno){
    let today = new Date();
    let fechaTransf = this.datePipe.transform(today,"yyyy-MM-dd")
    this.asistencia = new Asistencia();
    this.asistencia.numSocio = alumno.numSocio;
    this.asistencia.curso = alumno.curso;
    this.asistencia.nombreAlumno = alumno.nombre + ' ' + alumno.apellido;
    this.asistencia.fecha = fechaTransf;
    alumno.fechaAsistencia = fechaTransf;
    this.agregarAsistencia(this.asistencia);
    console.log(alumno.fechaAsistencia);
  }

  agregarAsistencia(asistencia:Object): void{
    this.asistenciaService.addAsistencia(asistencia)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  tieneCuotaAlDia(alumno: Alumno):boolean{
      let today = new Date();
      let fechaTransf = this.datePipe.transform(today,"yyyy-MM-dd");
      return alumno.fechaAsistencia != fechaTransf && fechaTransf.slice(0,3) == alumno.fechaPago.slice(0,3) && fechaTransf.slice(5,6) == alumno.fechaPago.slice(5,6);
  }

  fechaDeHoy():string{
    let today = new Date();
    let fechaTransf = this.datePipe.transform(today,"yyyy-MM-dd");
    return fechaTransf;
  }
}
