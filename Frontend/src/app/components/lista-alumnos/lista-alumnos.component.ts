import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {

  public alumnos: Alumno[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
      this.alumnoService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

}
