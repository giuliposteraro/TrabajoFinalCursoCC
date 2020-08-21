import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss']
})
export class AlumnoFormComponent {
  

  public alumno:Alumno;
  formTutor: FormGroup;
  menorEdad: boolean = true;
  datosAlumno: any = null;

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

  setAlumno(){
    this.menorEdad = this.datosAlumno?
    this.getEdad(this.datosAlumno.fechaNacimiento)<18 :
    false;
    }

  getEdad(fecha: string){
      let today = new Date(); 
      let date = new Date(fecha);
      return today.getFullYear() - date.getFullYear(); 
    }

}
