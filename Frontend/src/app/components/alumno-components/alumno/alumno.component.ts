import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  alumnos: Observable<Alumno[]>;
  isupdated: boolean = false; 
  alumno: Alumno = new Alumno();

  constructor(private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.alumnos = this.alumnoService.getAlumnos();
  }

  deleteAlumno(id: number): void {
    this.alumnoService.deleteAlumno(id)
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
  updateAlumno(id: number){
    this.router.navigate(['alumnos/', id]);
  }

  changeisUpdate(){  
    this.isupdated=false;  
  }    
  goBack(): void{
    this.router.navigate(['/cursos']);
  }
  editAlumno(alumno: Alumno){
    this.router.navigate(['/cursos', this.alumnoService.getAlumnoById(alumno.numSocio)])
  }

}
