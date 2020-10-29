import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Curso } from 'src/app/models/curso'; 
import { CursoService } from 'src/app/services/curso.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss']
})
export class AlumnoFormComponent implements OnInit{

  alumno:Alumno = new Alumno();
  cursos:Curso[];
  datosAlumno: any = null;
  submitted = false; 
  edad:number;
  curso:Curso = new Curso();

  constructor(private router: Router,
              private alumnoService: AlumnoService,
              private cursoService: CursoService,
              private datePipe: DatePipe) {

               }

  ngOnInit(){  
    this.getCursos(); 
  }
  onSubmit(){
    this.submitted = true;
    this.save();  
  }

  getEdad(fecha:string){
    let today = new Date(); 
    let date = new Date(fecha);
    return today.getFullYear() - date.getFullYear(); 
  }

  menorEdad():boolean{
    return this.getEdad(this.alumno.fechaNac) < 18;
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

  getCursos(){
    this.cursoService.getCursos().subscribe(data=>{
      this.cursos = data;
    });
  }

  actualizarFechaPago(){
    let today = new Date();
    let fechaTransf = this.datePipe.transform(today,"yyyy-MM-dd")
    this.alumno.fechaPago = fechaTransf;
  }

}
