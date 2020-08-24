import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss']
})
export class AlumnoFormComponent {
  

  public alumno:Alumno;

 

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private alumnoService: AlumnoService) {

                this.alumno = new Alumno();

               }

  onSubmit(){
    this.alumnoService.addAlumno(this.alumno).subscribe(result => this.gotoAlumnoList());
  }

  gotoAlumnoList() {
    this.router.navigate(['/alumnos']);
  }


}
