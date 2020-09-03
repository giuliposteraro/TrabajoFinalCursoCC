import { Component } from '@angular/core';
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
export class AlumnoFormComponent {
  

  public alumno:Alumno;

  public cursos:Curso[];

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private alumnoService: AlumnoService,
              private cursoService: CursoService) {

                this.alumno = new Alumno();

               }

  onSubmit(){
    this.alumnoService.addAlumno(this.alumno).subscribe(result => this.gotoAlumnoList());
    this.cursoService.getCursos().subscribe(data=>{
      this.cursos = data;
    });
  }

  gotoAlumnoList() {
    this.router.navigate(['/alumnos']);
  }


}
