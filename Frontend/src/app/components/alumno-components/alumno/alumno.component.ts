import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  public alumnos: Alumno[];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

}
