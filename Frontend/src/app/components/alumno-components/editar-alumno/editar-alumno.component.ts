import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alumnoService: AlumnoService,
              private cursoService: CursoService) { }

  ngOnInit() {
    this.alumno = new Alumno();

    this.numSocio = this.route.snapshot.params['numSocio'];
    
    this.alumnoService.getAlumnoById(this.numSocio)
      .subscribe(data => {
        console.log(data)
        this.alumno = data;
      }, error => console.log(error));
      
      this.cursoService.getCursoById(this.id)
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
