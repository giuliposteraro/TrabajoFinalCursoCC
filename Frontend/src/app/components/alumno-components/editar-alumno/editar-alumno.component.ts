import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {

  id: number;
  numSocio: number;
  alumno: Alumno;
  cursos:Curso[];
  files: any[];
  curso:Curso;
  selectedCurso:string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alumnoService: AlumnoService,
              private cursoService: CursoService,
              private datePipe: DatePipe,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.alumno = new Alumno();
    this.curso = new Curso();

    this.numSocio = this.route.snapshot.params['numSocio'];
    this.id = this.route.snapshot.params['id'];

    this.alumnoService.getAlumnoById(this.numSocio)
      .subscribe(data => {
        console.log(data)
        this.alumno = data;
      }, error => console.log(error));

        this.cursoService.getCursos().subscribe(data=>{
          this.cursos = data;
        });
  }

  updateAlumno() {
    this.alumnoService.updateAlumno(this.numSocio, this.alumno)
      .subscribe(data => {
        console.log(data);
        this.alumno = new Alumno();
        this.gotoList();
      }, error => console.log(error));
   
    // this.cursoService.updateCurso(this.id, this.curso)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.curso = new Curso();
    //   }, error => console.log(error));
  }

  getEdad(fecha: string){
    let today = new Date(); 
    let date = new Date(fecha);
    return today.getFullYear() - date.getFullYear(); 
  }

  menorEdad():boolean{
    return this.getEdad(this.alumno.fechaNac) < 18;
  }
  
  onSubmit() {
    this.updateAlumno();    
  }

  gotoList() {
    this.router.navigate(['/alumnos']);
  }

  actualizarFechaPago(){
    let today = new Date();
    let fechaTransf = this.datePipe.transform(today,"yyyy-MM-dd")
    this.alumno.fechaPago = fechaTransf;
  }

   fechaDeHoy():boolean{
     let today = new Date();
     let fechaTransf = this.datePipe.transform(today,"yyyy-MM-dd");
     return fechaTransf == this.alumno.fechaPago;
   }

   confirm() {
    this.confirmationService.confirm({
        message: 'Guardar alumno?',
        accept: () => {
            this.updateAlumno();
        }
    });
}

  onChange(value:string) {
    console.log("el valor seleccionado es: " + value);
}

}
