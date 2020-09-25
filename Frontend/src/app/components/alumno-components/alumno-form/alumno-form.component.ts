import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Curso } from 'src/app/models/curso'; 
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss']
})
export class AlumnoFormComponent implements OnInit{
  

  alumno:Alumno = new Alumno();

  cursos:Curso[];

  menorEdad: boolean = true;

  datosAlumno: any = null;

  submitted = false; 

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private alumnoService: AlumnoService,
              private cursoService: CursoService) {

               }

  ngOnInit(){}
  onSubmit(){
    this.submitted = true;
    this.menorEdad = this.datosAlumno?
      this.getEdad(this.datosAlumno.fechaNacimiento)<18 :
      false;
    let time = new Date(0);
    this.save();  
    // this.alumnoService.addAlumno(this.alumno).subscribe(result => this.gotoAlumnoList());
    // this.cursoService.getCursos().subscribe(data=>{
    //   this.cursos = data;
    // });
  }

  getEdad(fecha: string){
    let today = new Date(); 
    let date = new Date(fecha);
    return today.getFullYear() - date.getFullYear(); 
  }

  save() {
    this.alumnoService
    .addAlumno(this.alumno).subscribe(data => {
      console.log(data)
      this.alumno = new Alumno();
      this.gotoAlumnoList();
    }, 
    error => console.log(error));
  }
  gotoAlumnoList() {
    this.router.navigate(['/alumnos']);
  }


}
