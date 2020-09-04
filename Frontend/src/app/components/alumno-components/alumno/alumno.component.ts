import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  public alumnos: Alumno[];
  private location: Location;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  add(alumno: Alumno): void {
    this.alumnoService.addAlumno(alumno)
      .subscribe(alumno => {
        this.alumnos.push(alumno);
      });
  }

  delete(alumno: Alumno): void {
    this.alumnos = this.alumnos.filter(a => a !== alumno);
    this.alumnoService.deleteAlumno(alumno.numSocio).subscribe();
  }

  save(alumno: Alumno): void {
    this.alumnoService.modifyAlumno(alumno)
      .subscribe(() => this.goBack());
  }

  goBack(){
    this.location.back();
  }

}
