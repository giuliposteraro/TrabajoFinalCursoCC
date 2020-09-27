import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {

  numSocio: number;
  alumno: Alumno;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumno = new Alumno();

    this.numSocio = this.route.snapshot.params['numSocio'];
    
    this.alumnoService.getAlumnoById(this.numSocio)
      .subscribe(data => {
        console.log(data)
        this.alumno = data;
      }, error => console.log(error));
  }

  updateAlumno() {
    this.alumnoService.modifyAlumno(this.numSocio, this.alumno)
      .subscribe(data => {
        console.log(data);
        this.alumno = new Alumno();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateAlumno();    
  }

  gotoList() {
    this.router.navigate(['/alumnos']);
  }

}
